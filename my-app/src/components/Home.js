import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="home-container">
      <div className="left-half">
        <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Logo" className="logo" />
        <h1>Peak Stress</h1>
        <h2>ENGINEERING SERVICES</h2>
        <div className="text-container">
          <p>
            Siłą napędową mojej firmy jest pasja do nowych technologii oraz znajdowania nowych rozwiązań dla obecnych wyzwań inżynierskich.</p>
            <p>Dziś pasja ta napędza firmę Peak Stress, która ewoluowała od obliczeń wytrzymałościowych dla inżynierii mechanicznej do przedsiębiorstwa obejmującego obecnie swoim zakresem szerokie spektrum kategorii inżynierskich.</p>
            <p>Działalność mojej firmy oparta jest na nowoczesnym i kosztowo optymalnym modelu zarządzania siecią kompetencji inżynierskich „plug & play”.</p>
            <p>Ową sieć stanowią utalentowani inżynierie reprezentujący takie dziedziny inżynierii, jak budownictwo, mechanika, energetyka i mechanika płynów.</p>
            <p>Korzystając z takiego modelu biznesowego, możemy pochwalić się najwyższą jakością naszych usług przy niskich kosztach utrzymania naszego biura konstrukcyjnego.</p>
            <p>Dzięki temu moi klienci płacą mniej za usługi inżynierskie.</p>
          <p><span>Rafał Proszowski<br />Peak Stress CEO & Owner</span></p>
          <p>Dowiedz się więcej o moim doświadczeniu na <a href="https://www.linkedin.com/in/rafalproszowski/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
      {/* Dodaj prawą połowę (np. tło z obrazem) według potrzeb */}
      <div className="right-half">
        {/* Dodaj odpowiednie elementy w prawej połowie */}
      </div>
    </div>
  );
}

export default Home;
