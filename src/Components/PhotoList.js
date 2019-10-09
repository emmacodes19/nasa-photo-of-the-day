import axios from 'axios';
import React, {useEffect, useState}from 'react';
import PhotoCard from './PhotoCard';


export default function PhotoList() {
    const[photo, setPhoto] = useState([]);
    

    useEffect (() => {
        axios
        .get ('https://api.nasa.gov/planetary/apod?api_key=RmIllEe3W6r2da2H1pv5UdPcSzJTcOJQznT1fVCW')
        .then(response => {
            const picture = response.data;
            console.log(photo);
            console.log(response)
            setPhoto(picture);
        })

        .catch(error => {
            console.log("the data was not return", error);
          });
      }, [photo]);


      return (
        <div className="photo">

              <PhotoCard
                key={photo.hdurl}
                title={photo.title}
                explanation={photo.explanation}

              />

          
        </div>
      )
    }