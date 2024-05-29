import React, { useState } from 'react';
import "../styles/upload.css";
import axios from "axios";

const Upload = (props) => {
  const user = JSON.parse(sessionStorage.getItem("User"));
  const [fileInput, setFileInput] = useState("");
  const [previewSrc, setPreviewSource] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading , setLoad] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileInput(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImg = async (base64EncodedImage) => {
    setLoad(true);
    try {
      const response = await axios.post(`${props.srv}/image/upload`, {
        data: base64EncodedImage,
        title:title,
        description,
        author:user.id
      });
      alert("Upload Success");
      setPreviewSource("");
      setTitle("");
      setDescription("");
      setLoad(false);
    } catch (error) {
      alert("Error uploading image");
      console.error(error);
      setLoad(false);
    }
  };


  return (
    <div className='upload-img'>
      <h4>Upload your image here...</h4>
      <form style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
        <div>
          <label htmlFor='image-upload' className='image-label'>
            {previewSrc ? (
              <img src={previewSrc} alt="chosen" style={{ height: '100px' }} />
            ) : (
              <img
                src="https://yrf.com.au/wp-content/uploads/2021/09/placeholder-wire-image.jpg"
                alt="placeholder"
                style={{ height: '100px' }}
              />
            )}
          </label>
          <input
            type='file'
            id='image-upload'
            onChange={handleChange}
            className='file-input'
            accept="image/*"
          />
            <button className={'btn' + (loading)?" disable":""} onClick={(e)=>{e.preventDefault() ; uploadImg(previewSrc)}}>{(loading==false)?"Upload":<span class="loader"></span>}</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" , maxWidth:"300px" }}>
          <input
            type='text'
            id='title'
            placeholder='Enter title'
            className='img-title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols={30}
            rows={5}
            id='desc'
            placeholder="Enter image description"
            className='img-description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Upload;
