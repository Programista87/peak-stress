const HomePage: React.FC = () => {
    return (
      <div>
        <header>
          <img src="logo.png" alt="Logo firmy" />
          <h1>Nazwa Firmy</h1>
        </header>
        <Navigation />
        <section>
          <h2>Witaj na naszej stronie!</h2>
          <p>Tutaj umieść podstawowe informacje o firmie.</p>
        </section>
      </div>
    );
  };