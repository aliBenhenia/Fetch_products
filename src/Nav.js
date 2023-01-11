import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa fa-bars ${isOpen ? 'open' : ''}`} />
        </div>
      </div>
      <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#contact"><i class="fa fa-bars open"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;