// src/App.js

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './App.css';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

function App() {
  return (
    <div className="app">
      <div className="screen">
        <div className="loading">
          <h2>현재 사이트 준비중입니다.</h2>
          <IoIosArrowDown className="scrollIcon" />
        </div>
      </div>
      <div className="imageContainer">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${index + 1}`}
            className="image"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
