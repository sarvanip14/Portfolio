import React from "react";

function App() {
  return (
    <div>
      <header>
        <h1>P.N.S.SARVANI</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Hi this is Sarvani from VIT</p>
        </section>
        <section>
          <h2>My Hobbies</h2>
          <p>Reading books,Watching movies</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>xxxxxxxxxxxx</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear} Sarvani</p>
      </footer>
    </div>
  );
}

export default App;
