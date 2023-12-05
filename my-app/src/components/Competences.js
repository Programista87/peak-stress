// Competences.js
import React from 'react';
import './styles/kompetencje.css';

function Competences() {
  return (
    <div className="container">
      <div className="competences-section">
        <h2>Zakres Kompetencji</h2>
        <p>
          PEAK STRESS oferuje usługi inżynierskie w zakresie projektowania maszyn i urządzeń oraz ich obliczeń wytrzymałościowych. Główną gałęzią naszej działalności są symulacje komputerowe wykorzystujące Metodę Elementów Skończonych (MES). PEAK STRESS ma wieloletnie doświadczenie w opracowywaniu, wymiarowaniu i optymalizacji rozwiązań mechanicznych. Nasze kompetencje obejmują zarówno konstrukcję dużych elementów, produktów i maszyn, jak i skomplikowane zaawansowane rozwiązania mechaniczne, w których precyzja i jakość są kluczowymi parametrami.
        </p>

        <div className="main-competences">
          <div>
            <h3>PROJEKTOWANIE MECHANIKA</h3>
            <p>
              Analizy czynników wpływających na jakość, funkcjonalność, cenę
              Projektowanie maszyn, produktów w oparciu o specyfikacje zamawiającego
              Tworzenie nowych koncepcji oraz udoskonalanie ich dla nowych rozwiązań
              Optymalizacja istniejących rozwiązań
              Dokumentacja techniczna
            </p>
          </div>

          <div>
            <h3>KONSULTACJE INŻYNIERSKIE</h3>
            <p>
              Definiowanie założeń i kryteriów projektowych
              Tworzenie prototypów produktów (produkcja jednostkowa u naszych partnerów)
              Pomiary i tłumienie drgań przy użyciu metody optycznej i akcelerometrów (amplitudy przemieszczeń i przyspieszeń drgań)
            </p>
          </div>

          <div>
            <h3>OBLICZENIA WYTRZYMAŁOŚCIOWE</h3>
            <p>
              Wykonujemy obliczenia wytrzymałościowe oraz wymiarowanie konstrukcji zgodnie z międzynarodowymi standardami i normami (EN, ASME, Eurocode) między innymi:
              Urządzenia, maszyny i ich komponenty Zbiorniki ciśnieniowe, wymienniki ciepła (EN13445)
              Połączenia (śrubowe, spawane)
              Silosy, kontenery, zbiorniki magazynowe
              Konstrukcje stalowe,
              Konstrukcje kompozytowe
              Rurociągi
              Inne typy urządzeń i struktur
            </p>
          </div>

          <div>
            <h3>GŁÓWNE KOMPETENCJE</h3>
            <p>
              Symulacje Komputerowe
              Dzięki zastosowaniu metod numerycznych MES i CFD w dziedzinie mechaniki i przepływów możemy symulować zjawiska i procesy w skali i dokładności niedostępnej w innych metodach obliczeniowych. W połączeniu z wysoko wykwalifikowaną kadrą możemy zaoferować naszym klientom najwyższy poziom usług inżynierskich i doradztwa w tym zakresie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
