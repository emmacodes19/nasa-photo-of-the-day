import React from "react";

const PhotoCard = props => {
  return (
    <div className="photo-list">
    <img className='nasa_image' alt='milky way' src={props.imgUrl}/>
    <p> {props.imgExplanation}</p>
    <h2> {props.imgTitle} </h2>
    
    </div>
    
    


  
  );
};
export default PhotoCard;

