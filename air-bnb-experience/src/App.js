import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./Contact";
import './App.css';

export default function App() {
  return (
    <div className="App">
     {/* <Navbar />
     <Hero />
     <Card /> */}
     <Contact
      img="./images/katie-zaferes.png" 
      name="Mr.Kellerson"
      phone="222-222-2222"
      email="keller@catholic.org"
      />
       <Contact
      img="./images/react-icon-large.png" 
      name="Fluffykins"
      phone="504-222-1232"
      email="email@info.net"
      />
       <Contact
      img="./images/star.png" 
      name="Felix"
      phone="401-111-2231"
      email="test@google.com"
      />
       <Contact
      img="./images/NoImageAvailable.png" 
      name="Pumpkin"
      phone="800-222-5656"
      email="info@email.com"
      />
    </div>
  );
}
