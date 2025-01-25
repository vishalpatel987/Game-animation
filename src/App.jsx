
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const rows = 15;
  const cols = 20;

  const [activeColumn, setActiveColumn] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [color, setColor] = useState("hsl(230, 45%, 20%)");
  const [lightness, setLightness] = useState(50); // Intensity of the color

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColumn((prev) => {
        if (prev + direction < 0 || prev + direction+4 >= cols) {
          setDirection(-direction); 
        }
        return prev + direction;
      });

      // Randomly fluctuate the lightness (intensity) when bouncing
      setLightness((prev) => Math.max(30, Math.min(70, prev + (Math.random() * 10 - 5))));

      // Update the color dynamically
      setColor(`hsl(139, 100%, ${lightness}%)`);
    }, 200); // Adjust speed (200ms for smooth animation)

    return () => clearInterval(interval);
  }, [direction, lightness, cols]);

  return (
    

  

  

<div className="grid-container">
{Array.from({ length: rows }).map((_, row) => (
  <div className="row" key={row}>
    {Array.from({ length: cols }).map((_, col) => {
      const distance = Math.abs(col - activeColumn);
      const opacity = Math.max(0.3, 1 - distance * 0.1); // Decrease opacity based on distance
      const adjustedLightness = Math.max(30, Math.min(70, lightness - distance * 2)); // Reduce lightness with distance

      // Dynamically update the color based on distance and lightness
      const dynamicColor = `hsl(230, 100%, ${adjustedLightness}%)`; // Adjust color intensity (lightness)

      return (
        <div
          key={col}
          className={`cell ${col >= activeColumn && col < activeColumn + 5 ? "active" : ""}`}
          style={{
            backgroundColor: col >= activeColumn && col < activeColumn + 5 ? dynamicColor : "",
            opacity: col >= activeColumn && col < activeColumn + 5 ? opacity : 0.5,
          }}
        />
      );
    })}
  </div>
))}
</div>


  );


};

export default App;






















