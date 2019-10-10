import React from "react";
import PhotoList from './Components/PhotoList';
import "./App.css";
import { Button } from 'reactstrap';
import styled from'styled-components';




function App() {

  return (

    <div className="App">
    <PhotoList/>
    <AlertButton color="danger">Danger!</AlertButton>   
    </div>
      
  );
}

export default App;


// const AlertButton= styled.button `
// background-color:blue;
// padding: 10px 15px 10px 10px;
// display:flex;
// margin-left: 350px;

// `


export const AlertButton = styled.button`
  width: 200px;
  height: 30px;
  background: ${props => (props.primary ? "null" : "#00008B")};
  color: ${props => (props.primary ? "#2a2223" : "#FFF")};
  border: 0;
  transition: 0.2s ease-in;
  border: ${props =>
    props.primary ? "2px solid #99f3eb" : "2px solid #2a2223"};

  &:hover {
    background: ${props => (props.primary ? "#2a2223" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#2a2223")};
    border: ${props =>
      props.primary ? "2px solid #2a2223" : "2px solid #99f3eb"};
  }
`;


