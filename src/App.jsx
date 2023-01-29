import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Trending from "./Components/Trending";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};