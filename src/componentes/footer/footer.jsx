import React from 'react';

function Footer() {
    return (
      <footer className="bg-dark text-light pt-4 pb-3 w-100 mt-auto">
        <section className="container text-center">
          <h2 className="mb-3">My Delights</h2>
          <p className="mb-1">Sabores que encantan, momentos que perduran.</p>
          <small>&copy; {new Date().getFullYear()} Todos los derechos reservados.</small>
        </section>
      </footer>
    );
  }
  
  export default Footer;