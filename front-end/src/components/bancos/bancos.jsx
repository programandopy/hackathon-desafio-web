import React, { useState, useEffect } from 'react';


export const bancos = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/api/category/categorylist")
      .then((response) => response.json())
      .then((data) => setPlaces(data.places))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Bancos</h1>
      <p>Lista de Bancos</p>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <h3>{place.name}</h3>
            <p>{place.imagen}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};


ex
