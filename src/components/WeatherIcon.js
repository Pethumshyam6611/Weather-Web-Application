import React from 'react';

// This is a placeholder component for displaying weather icons.
// It will be enhanced later to map iconCode to actual image files, SVG icons, or a font icon library.
const WeatherIcon = ({ iconCode, altText }) => {
  return (
    <div className="weather-icon">
      Icon: {iconCode} ({altText})
    </div>
  );
};

export default WeatherIcon;
