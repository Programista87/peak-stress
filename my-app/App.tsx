import React from 'react';
import './App.css'; // Załaduj swoje style

// Komponent nawigacji
const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>Strona Główna</li>
        <li>Projekty</li>
        <li>Kontakt</li>
        {/* Dodaj inne zakładki według potrzeb */}
      </ul>
    </nav>
  );
};