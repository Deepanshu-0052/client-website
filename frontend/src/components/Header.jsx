import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold">MyWebsite</h1>

        <nav className="hidden md:flex gap-8">

          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/details" className="hover:text-yellow-300">Details</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          <Link to="/explore" className="hover:text-yellow-300">Explore</Link>
          <Link to="/messages" className="hover:text-yellow-300">Messages</Link>

        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-700 text-center py-4 space-y-4">

          <Link to="/">Home</Link><br/>
          <Link to="/details">Details</Link><br/>
          <Link to="/contact">Contact</Link><br/>
          <Link to="/explore">Explore</Link><br/>
          <Link to="/messages">Messages</Link>

        </div>
      )}

    </header>
  );
}

export default Header;