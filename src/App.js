import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./App.css";
import styled from "styled-components"

function App() {

  console.log('You see me every time React finishes with the DOM.')

  const HTML = document.getElementsByTagName('html')
  console.log(HTML)

  const BGColor = styled.div`
  background-color: black;
  color: pink;
`


  return (
    
    <BGColor className="App">

     
        <Header />
      
      <Body />
    </BGColor>
  );
}

export default App;
