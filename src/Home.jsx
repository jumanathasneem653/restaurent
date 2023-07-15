import React from "react";
import Container from "react-bootstrap/Container";
import "./Home.css";
import { useLocation } from "react-router-dom";

export default function App() {
  // c

    const location = useLocation;

  return (
    <div>
      <div className="img-div">
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F262978%2Fpexels-photo-262978.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-262978.jpg%26fm%3Djpg&tbnid=BJcE9wzxzqXDNM&vet=12ahUKEwiFlpaVyfz_AhUY7DgGHTBNBEIQMygCegUIARDNAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Frestaurant%2520food%2F&docid=a9b11MI_V60KkM&w=5616&h=3744&q=restaurant%20images%20free%20download&ved=2ahUKEwiFlpaVyfz_AhUY7DgGHTBNBEIQMygCegUIARDNAQ" alt="" />
      </div>
      <Container>
      <h1 className="title">SWEET CORNER</h1>
        <h2 className="text-center" style={{color:'white'}}>Welcome to the restaurant</h2>
      </Container>
    </div>
  );
}
