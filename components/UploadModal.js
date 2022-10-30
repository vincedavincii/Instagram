import React, {useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {modalState} from "../atom/modalAtom";
import Modal from "react-modal";
import {CameraIcon} from "@heroicons/react/24/outline";

const UploadModal = () => {
	const [open, setOpen] = useRecoilState(modalState);

	const [chosenPicture, setChosenPicture] = useState("");

	const filePickerRef = useRef(null);

	const picturePickerHandler = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readEvent) => {
			setChosenPicture(readEvent.target.result);
		};
	};

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
						/>
						<button
							disabled
							className="bg-red-500 w-full text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
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
