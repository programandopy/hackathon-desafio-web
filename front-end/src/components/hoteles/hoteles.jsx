import  { useState, useEffect } from 'react';
export const Hoteles = () => {
    const [hoteles, setHoteles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/api/category/categorylist')
            .then(response => response.json())
            .then(data => setHoteles(data.hoteles))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Hoteles</h1>
            <p>Lista de hoteles</p>
            <ul>
                {hoteles.map((hotel) => (
                    <li key={hotel._id}>
                        <h2>{hotel.nombre}</h2>
                    </li>
                ))}
            </ul>
            <button>Mas detalles</button>
        </div>
    );
};



 