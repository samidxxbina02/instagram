import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./components/MainPage";
import Modal from "./components/Modal/Add";

import "./App.css";
import { ModalContext } from "./context/ModalContext/ModalContext";
import { ThemeContext } from "./context/ThemeContext/ThemeContext";
import { StoreContext } from "./context/Store/StoreContext";
import EditModal from "./components/Modal/Edit";

export default function App() {
  const { addModalIsOpen, editModalIsOpen } = useContext(ModalContext);
  const { theme } = useContext(ThemeContext);
  const { posts, getPosts } = useContext(StoreContext);

  useEffect(() => {
    getPosts();
  }, []);
  
  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<div></div>} />
          <Route path="/profile" element={<div></div>} />
          <Route path="/reels" element={<div></div>} />
        </Route>
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
      </Routes>
      {addModalIsOpen && <Modal />}
      {editModalIsOpen && <EditModal />}
    </div>
  );
}
