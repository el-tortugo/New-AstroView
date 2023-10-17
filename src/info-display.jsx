import React from 'react';
import './info-display.css';

function InfoDisplay({ data, fetchData }) {
  const { title, explanation, hdurl: Image, date, copyright } = data;

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div className="info-container">
      <img className="info-image" src={Image} alt="Image" />
      <h1 className="info-title">{title}</h1>
      <h2 className="info-date">{date}</h2>
      <p className="info-explanation">{explanation}</p>
      <p className="info-copyright">{copyright}</p>

      <button onClick={handleButtonClick}>Fetch New Data</button>
    </div>
  );
}

export default InfoDisplay;