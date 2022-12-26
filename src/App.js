import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage/PostPage";
import PhotoPage from "./components/PhotoPage/PhotoPage";
import Contacts from "./components/ContactsPage/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/photos" element={<PhotoPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
