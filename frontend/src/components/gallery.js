import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './imagecard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages, login, logout, selectImgArr,selectLoading,setLoading, selectLoginStatus } from '../redux/authSlice';
import "../styles/images.css"

const Gallery = (props) => {
  
  const [refresh, setRefresh] = useState(false);
  const imgarr = useSelector(selectImgArr);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchImages());
  }, [refresh]);


  return (
    <div className='gallery'>
      <h1 style={{margin:"auto"}}>Gallery</h1>
      <button onClick={()=>{setRefresh(!refresh)}} className='btn'>Refresh</button>
      <div className="gallery">
      <div className='img-home'>
        {imgarr.length > 0 ? (
          imgarr.map((img, index) => (
            <ImageCard key={index} srv={props.srv} id={img._id} title={img.title} views={img.views} url={'https://res.cloudinary.com/dbtis6lsu/image/upload/v1710160772/'+img.url} desc={img.description || `Image ${index + 1}`}/>
          ))
        ) : (
          <p>{(loading==true)?<span class="loader"></span>:'No images available'}</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Gallery;
