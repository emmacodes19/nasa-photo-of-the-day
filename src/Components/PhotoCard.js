import React from "react";

const PhotoCard = props => {
  return (
    <div className="photo-list">
    <img className='nasa_image' alt='milky way' src={props.imgUrl}/>
    </div>
  
  );
};
export default PhotoCard;

