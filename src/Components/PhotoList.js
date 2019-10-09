import axios from 'axios';
import React, {useEffect, useState}from 'react';
import PhotoCard from './PhotoCard';


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
        <div className="photo">

              <PhotoCard
                imgUrl={photo.hdurl}
                title={photo.title}
                explanation={photo.explanation}

              />

          
        </div>
      )
    }