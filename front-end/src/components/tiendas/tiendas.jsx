/* import React, { useState, useEffect } from 'react';

export const tiendas = () => {
    const [tienda, setTienda] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8001/api/category/categorylist')
            .then(response => response.json())
            .then(data => setTie(data.restaurante))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Restaurantes</h1>
            <p>Lista de Restaurantes</p>
            <ul>
                {restaurante.map((restaurante) => (
                    <li key={restaurante._id}>
                        <h2>{restaurante.nombre}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};
 */