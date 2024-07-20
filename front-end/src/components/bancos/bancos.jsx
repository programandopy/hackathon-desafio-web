import { useState, useEffect } from "react";

const Bancos = () => {
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
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bancos;
