import React, { useState } from "react";
import { ModalContext } from "./ModalContext";

const ModalProvider = ({ children }) => {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const toggleAddModalIsOpen = () => {
    setAddModalIsOpen((prev) => !prev);
  };

  const toggleEditModalIsOpen = () => {
    setEditModalIsOpen((prev) => !prev);
  };

  const defaultValue = {
    addModalIsOpen,
    toggleAddModalIsOpen,
    editModalIsOpen,
    toggleEditModalIsOpen
  };

  return (
    <ModalContext.Provider value={defaultValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
