import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Review from "./Review";
import Contact from "./Contact";
import About from "./About";

export default function App() {
  return (
    <div style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp1874155.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        
      </Routes>
    </div>
  );
}