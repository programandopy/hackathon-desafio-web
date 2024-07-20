import { Link } from "react-router-dom"; // Assuming you're using React Router
import "./dashboard.css";
import { bancos as Bancos } from "../../components/bancos/bancos";
import { useEffect } from "react";
import { useState } from "react";
export const Dashboard = () => {
  return (
    <>
      <header className="header">
        <h1>Turismo</h1>
        <h2>Categoria</h2>
        <nav className="contentNav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section></section>
    </>
  );
};
