import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from './imagecard';
import "../styles/images.css"

const Gallery = (props) => {
  const [imgarr, setImgs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const fetchImages = async () => {
    try {
      const result = await axios.get(`${props.srv}/image/getimages`);
      setImgs(result.data);
    } catch (e) {
      alert('Error fetching images');
      console.log(e);
    }
  };

  useEffect(() => {
    fetchImages();
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
          <p>No images available</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Gallery;
