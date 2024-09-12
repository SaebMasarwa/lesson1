import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  let myName: string = "Mor";
  let age: number = 20;
  let animalUrl: string =
    "https://c02.purpledshub.com/uploads/sites/62/2018/06/GettyImages-524909101-4ccfcfa.jpg?webp=1&w=1200";
  return (
    <div className="App">
      <Navbar />
      <h1>{myName}</h1>
      <p>Hello from App component</p>
      <img src={animalUrl} alt="cute giraffe" />
      <div>Animal age is {age + 10}</div>
      <p>{Math.floor(Math.random() * 100)}</p>
    </div>
  );
}

export default App;
