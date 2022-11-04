/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {modalState} from "../atom/modalAtom";
import Modal from "react-modal";
import {CameraIcon} from "@heroicons/react/24/outline";
import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import {db, storage} from "../firebase";
import {useSession} from "next-auth/react";
import {getDownloadURL, ref, uploadString} from "firebase/storage";

const UploadModal = () => {
	const [open, setOpen] = useRecoilState(modalState);

	const [chosenPicture, setChosenPicture] = useState("");

	const [loading, setLoading] = useState(false);

	const filePickerRef = useRef(null);
	const captionRef = useRef(null);

	const {data: session} = useSession();

	const picturePickerHandler = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readEvent) => {
			setChosenPicture(readEvent.target.result);
		};
	};

	const uploadPostHandler = async () => {
		if (loading) return;

		setLoading(true);

		const docRef = await addDoc(collection(db, "post"), {
			caption: captionRef.current.value,
			username: session.user.username,
			profilePicture: session.user.image,
			timeStamp: serverTimestamp(),
		});

		const imageRef = ref(storage, `post/${docRef.id}/image`);
		await uploadString(imageRef, chosenPicture, "data_url").then(
			async (snapshot) => {
				const downloadURL = await getDownloadURL(imageRef);
				await updateDoc(doc(db, "post", docRef.id), {
					image: downloadURL,
				});
			}
		);
		setOpen(false);
		setLoading(false);
		setChosenPicture(null);
	};

	useEffect(() => {
		Modal.setAppElement("body");
	});

	return (
		<div>
			{open && (
				<Modal
					isOpen={open}
					onRequestClose={() => {
						setOpen(false), setChosenPicture(null);
					}}
					className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%]  translate-x-[-50%] bg-white  border-2 rounded-md shadow-lg focus:ring-0"
				>
					<div className="flex flex-col justify-center items-center h-[100%]">
						{chosenPicture ? (
							<img
								src={chosenPicture}
								alt="selected picture"
								className="w-full max-h-[250px] object-cover cursor-pointer"
								onClick={() => setChosenPicture(null)}
							/>
						) : (
							<CameraIcon
								className="h-14 cursor-pointer bg-red-200 rounded-full p-2 text-red-500 border-2"
								onClick={() => filePickerRef.current.click()}
							/>
						)}

						<input
							type="file"
							hidden
							ref={filePickerRef}
							onChange={picturePickerHandler}
						/>
						<input
							type="text"
							maxLength="150"
							placeholder="Please enter your caption..."
							className="m-4 border-none text-center w-full focus:ring-0"
							ref={captionRef}
						/>
						<button
							disabled={!chosenPicture || loading}
							className="bg-red-500 w-full text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
							onClick={uploadPostHandler}
						>
							Post
						</button>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default UploadModal;
