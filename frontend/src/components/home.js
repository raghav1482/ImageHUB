import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import  "../styles/home.css"
import ImageCard from './imagecard'
import axios from "axios"
const Home = (props) => {
  const imagearr = [
    {
      "url": "https://picsum.photos/300/200?animal",
      "title": "quis nostrud exercitation ullamco laboris",
      "desc": "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa"
    },
    {
      "url": "https://picsum.photos/300/200?grayscale",
      "title": "ut enim ad minim veniam quis",
      "desc": "enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident"
    },
    {
      "url": "https://picsum.photos/300/200",
      "title": "tempor incididunt ut labore et",
      "desc": "tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
    },
    {
      "url": "https://picsum.photos/300/200?road",
      "title": "consectetur adipiscing elit sed do",
      "desc": "adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse"
    },
    {
      "url": "https://picsum.photos/300/200?mountain",
      "title": "incididunt ut labore et dolore",
      "desc": "ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur"
    },
    {
      "url": "https://picsum.photos/300/200?grass",
      "title": "laboris nisi ut aliquip ex ea",
      "desc": "nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
  ]
  
  const [imgarr, setImgs] = useState([]);
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
  }, []);

  return (
    <div className='main-home'>
      <div className='hero'>
        <h3>Explore and share <br/> images you like.</h3>
      </div>
      <h3 className='mx-4'>PICSUM FETCHES (DUMMY)</h3>
      <div className='img-home'>
      {
        imagearr.map((elem)=>{return <ImageCard srv={props.srv} title={elem.title} desc={elem.desc} url={elem.url}/>})
      }
      </div>
      <h3 className='mx-4'>PLATFORM UPLOADS</h3>
      <div className='img-home'>
      {
        imgarr.slice(0,5).map((elem)=>{return <ImageCard srv={props.srv} title={elem.title} views={elem.views} id={elem._id} desc={elem.description} url={'https://res.cloudinary.com/dbtis6lsu/image/upload/v1710160772/'+elem.url}/>})
      }
      </div>
    </div>
  )
}

export default Home
