import React from "react";
import {useRecoilState} from "recoil";
import {modalState} from "../atom/modalAtom";

const UploadModal = () => {
	const [open, setOpen] = useRecoilState(modalState);

	return (
		<div>
			<h1>Upload modal</h1>
			{open && <h1>Modal is fucking open</h1>}
		</div>
	);
};

export default UploadModal;
