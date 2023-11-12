import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      <img src="/my-app/src/components/Logo.png" alt="Logo" className="logo" />
      <div className="text-container">
        <h1>Peak Stress</h1>
        <h2>ENGINEERING SERVICES</h2>
        <p>
          Siłą napędową mojej firmy jest pasja do nowych technologii oraz znajdowania nowych rozwiązań dla obecnych wyzwań inżynierskich.
          Dziś pasja ta napędza firmę Peak Stress, która ewoluowała od obliczeń wytrzymałościowych dla inżynierii mechanicznej do przedsiębiorstwa obejmującego obecnie swoim zakresem szerokie spektrum kategorii inżynierskich.
          Działalność mojej firmy oparta jest na nowoczesnym i kosztowo optymalnym modelu zarządzania siecią kompetencji inżynierskich „plug & play”.
          Ową sieć stanowią utalentowani inżynierie reprezentujący takie dziedziny inżynierii, jak budownictwo, mechanika, energetyka i mechanika płynów.
          Korzystając z takiego modelu biznesowego, możemy pochwalić się najwyższą jakością naszych usług przy niskich kosztach utrzymania naszego biura konstrukcyjnego.
          Dzięki temu moi klienci płacą mniej za usługi inżynierskie.
        </p>
        <p>Rafał Proszowski<br />Peak Stress CEO & Owner</p>
        <p>Dowiedz się więcej o moim doświadczeniu na <a href="https://www.linkedin.com/in/rafalproszowski/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </div>
  );
}

export default Home;