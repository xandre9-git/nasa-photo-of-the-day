import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./App.css";

function App() {

  console.log('You see me every time React finishes with the DOM.')

  return (
    <div className="App">

      <p>
        <Header />
      </p>
      <p><Body /></p>
    </div>
  );
}

export default App;
