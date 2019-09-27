import React from "react";
import "./App.css";
import PhotoList from "./PhotoList";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const StyledH1 = styled.h1`
color: red;
`;

const StyledH3 = styled.h3`
color: blue;
`;


function App() {
  return (
    <Container className="App">
     <StyledH1>NASA</StyledH1>
       <StyledH3>Photo of the Day!</StyledH3>
       <PhotoList />
    </Container>
  );
}

export default App;