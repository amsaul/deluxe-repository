import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-dark-lighter py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Compass className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Deluxe</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-primary transition-colors ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 hover:text-primary transition-colors ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;