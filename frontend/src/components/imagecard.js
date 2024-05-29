import React, { useState } from 'react';
import "../styles/images.css";
import axios from "axios"
import view_img from "../images/view.png"

const ImageCard = ({ title, url, desc ,id,views,srv}) => {
  const [isPreviewVisible, setPreviewVisible] = useState(false);


  const togglePreview = () => {
    if(isPreviewVisible==true && id!=undefined){
      try{
        axios.post(`${srv}/image/updateview`,{id:id});
      }catch(e){
        console.log(e);
      }
    }
    setPreviewVisible(!isPreviewVisible);
  };

  return (
    <div className='image-card'>
      {isPreviewVisible && (
        <div className='img-preview'>
          <img src={url} alt={title} />
          <div className='img-detail2'>
            <button onClick={togglePreview} className='btn'>Close</button>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </div>
      )}
      <div className='img-detail' onClick={togglePreview}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <img src={url} alt={title} onClick={togglePreview} />
      <div className='view-div'>
      <img src={view_img}/>
      <p>{views}</p>
      </div>
    </div>
  );
};

export default ImageCard;
