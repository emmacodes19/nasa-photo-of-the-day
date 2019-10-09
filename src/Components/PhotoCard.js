import React from "react";

const PhotoCard = props => {
  return (
    <div className="photo-list">
    <img className='nasa_image' alt='milky way' src={props.hdurl}/>
    </div>
    // <div className='botoom'> 
    //   <h2>Film title: {props.title}</h2>
    //   <p>{props.description}</p>

    // </div>
  
  );
};
export default PhotoCard;

