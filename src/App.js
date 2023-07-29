// src/App.js

import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './App.css';

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
        {Array.from({ length: 6 }, (_, index) => (
          <img
            key={index}
            src={`/images/${index + 1}.jpg`}
            alt={`${index + 1}`}
            className="image"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
