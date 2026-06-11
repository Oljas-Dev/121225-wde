import { useState } from "react";
import "./App.css";
import EventComponent from "./components";

function App() {
  const fruits = ["Banana", "kiwi", "orange"];

  function handleClick(item) {
    console.log(`This element selected: ${item}`);
  }

  return (
    <>
      <Ratings />
      <EventComponent />
    </>
  );
}

export default App;
