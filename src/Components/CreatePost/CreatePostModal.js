import {
  Dialog,
  DialogContent,
  IconButton,
  DialogTitle,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useRef, useState } from "react";
import "./CreatePostModal.css";
import ImgTag from "../ImgTag";
import { createUrl, uploadFile } from "../../apiRequests/postApi";

const CreatePostModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedFile,setSelectedFile]=useState(null)

  const handleClose = () => {
    setIsOpen(false);
  };

  //
  const fileInput = useRef(null);

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
setSelectedFile(file)
    // await createUrl(file)
    //   .then((response) => console.log("respones->", response.data))
    //   .catch((err) => console.log(err));


    const formData = new FormData();
    formData.append('file', selectedFile);

    



    await uploadFile(formData)
      .then((response) => console.log("respones->", response.data))
      .catch((err) => console.log(err));

    console.log("file->", file);
  };

  //

  return (
    <div className="createPostPage">
      <div className="createPostCont">
        <div className="createPostModalHeading">
          <h1> Create new Post </h1>
        </div>
        <div className="createPostModalContent">
          <div className="imgCont">
            <ImgTag src={"../images/birthDayCake.png"} width={250} />

            <span className="textDragPics">Drag photos and videos here</span>
          </div>
          <div className="selectPostBtn">
            <button onClick={handleClick}>Select from computer </button>
            <input
              type="file"
              ref={fileInput}
              onChange={handleFileSelect}
              style={{ display: "none" }}
            ></input>
          </div>
        </div>
      </div>
    </div>

    //    <Dialog open={isOpen}>
    // <DialogTitle>
    //   Create new Post
    //   <IconButton onClick={handleClose}>
    //     <CloseIcon />
    //   </IconButton>
    // </DialogTitle>
    // <DialogContent>
    //   crrekfjndkl
    // </DialogContent>

    //    </Dialog>
  );
};

export default CreatePostModal;
