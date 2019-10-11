import axios from 'axios';
import React, {useEffect, useState}from 'react';
import PhotoCard from './PhotoCard';
import { Container, Row} from 'reactstrap';


export default function PhotoList() {
    const[photo, setPhoto] = useState({});
    
    useEffect (() => {
        axios
        .get ('https://api.nasa.gov/planetary/apod?api_key=RmIllEe3W6r2da2H1pv5UdPcSzJTcOJQznT1fVCW')
        .then(response => {
            console.log(response)
            setPhoto(response.data);
        })
        .catch(error => {
            console.log("the data was not return", error);
          });
      }, []);



      return (
        <Container>
          <Row>
              < PhotoCard
                imgUrl={photo.hdurl}
                imgTitle={photo.title}
                imgExplanation={photo.explanation}
                imgDate={photo.date}
              />  
          </Row>
        </Container>
      )
    }