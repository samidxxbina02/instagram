import React, { useContext, useRef, useState } from "react";
import { StyledModal } from "./styled";
import QueueIcon from "@mui/icons-material/Queue";

import Button from "../../UI/Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import { ModalContext } from "../../../context/ModalContext/ModalContext";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { StoreContext } from "../../../context/Store/StoreContext";

const Modal = () => {
  const { toggleModalIsOpen } = useContext(ModalContext);
  const { createPost } = useContext(StoreContext);
  const [description, setDesription] = useState("");

  const _createPost = () => {
    const newPost = {
      description,
      nickname: "samidxxbina",
    };

    createPost(newPost);

    setDesription("");
  };

  const modalRef = useRef();
  useOnClickOutside(modalRef, toggleModalIsOpen);
  return (
    <StyledModal.Opacity>
      <StyledModal.CloseWrapper>
        <CloseIcon sx={{ color: "white" }} fontSize="large" />
      </StyledModal.CloseWrapper>
      <StyledModal.Wrapper ref={modalRef}>
        <StyledModal.Title>Создание публикации</StyledModal.Title>
        <StyledModal.Body>
          <QueueIcon sx={{ color: "white" }} fontSize="large" />
          <StyledModal.BodyDescription>
            Перетащите сюда фото и видео
          </StyledModal.BodyDescription>
          <Button variant="contained" disableElevation>
            Выбрать на компьютере
          </Button>
          <textarea
            onChange={(e) => setDesription(e.target.value)}
            value={description}
            placeholder="Описание"
          />
          <Button onClick={_createPost} variant="contained" disableElevation>
            Добавить
          </Button>
        </StyledModal.Body>
      </StyledModal.Wrapper>
    </StyledModal.Opacity>
  );
};

export default Modal;
