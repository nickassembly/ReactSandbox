import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './App.css';

export default function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Card 
       img = "./images/NoImageAvailable.png"
       rating = "5.0"
       reviewCount = {6}
       country = "kellerville"
       title = "Life lessons with Keller ZeCar"
       price = {136}
     /> 
     
    </div>
  );
}
