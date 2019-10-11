import React from "react";
import {
  Card, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';
import { Alert } from 'reactstrap';
import styled from'styled-components';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';




const PhotoCard = props => {
  return (



<Col  sm="12"  md="6" offset-md="3" key={props.id}>
<BackgroundImage>
  <MainDiv>
  <CardTitle> 
    <Alert color="secondary"> <Date>
     {props.imgTitle} </Date>
    </Alert>  
  </CardTitle>
<SkyImage width='100%' src={props.imgUrl} alt='An image of NASA'  />


<CardBody>
        <CardExplanation>
        Explanation: {props.imgExplanation} </CardExplanation>
         <Alert color="info">  <Date> Date: {props.imgDate} </Date></Alert> 
        </CardBody>  
 <UncontrolledButtonDropdown>     
  <DropdownToggle caret>
        Read More
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header> 
      <CardBody>
        <CardExplanation>
        Explanation: {props.imgExplanation} </CardExplanation>
         <Alert color="info">  <Date> Date: {props.imgDate} </Date></Alert> 
        </CardBody>  
      </DropdownItem>
    </DropdownMenu>
</UncontrolledButtonDropdown> 

          {/* Explanation: {props.imgExplanation} </CardExplanation>
         <Alert color="info">  <Date> Date: {props.imgDate} </Date></Alert> 
      </CardBody>   */}    
         
  </MainDiv>
  </BackgroundImage>
</Col>  













  );
};
export default PhotoCard;


const SkyImage= styled.img`
width: 400px;
height: 400px;
object-fit: scale;
border-radius: 20px;
`

const MainDiv= styled.div `
display:flex;
flex-direction:column;
align-items: center;
background-color: lavender;

`

const CardExplanation = styled.h5 `
color: gray;
font-family:roboto;
line:1.2;


&:hover {
  background: ${props => (props.primary ? "#2a2223" : "#fff")};
  color: ${props => (props.primary ? "#fff" : "#2a2223")};
  border: ${props =>
    props.primary ? "2px solid #2a2223" : "2px solid #99f3eb"};
}`

const Date = styled.h6 `
color: ${props => (props.seconday ? 'red' : 'black')}

&:hover {
  background: ${props => (props.secondary? "#2a2223" : "#fff")};
  color: ${props => (props.secondary ? "#fff" : "#2a2223")};
  border: ${props =>
    props.secondary? "2px solid #2a2223" : "2px solid #99f3eb"};
}`




const BackgroundImage = styled.div
`background-color:black;`




