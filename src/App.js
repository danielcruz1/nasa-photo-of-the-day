import React from "react";
import "./App.css";
import PhotoList from "./PhotoList";
import styled from 'styled-components';

const Title = styled.h1`
color: red;
`;

const BlueH3 = styled.h3`
color: blue;
`;




function App() {
  return (
    <div className="App">
     <Title>NASA</Title>
       <BlueH3>Photo of the Day!</BlueH3>
       <PhotoList/>
    </div>
  );
}

export default App;