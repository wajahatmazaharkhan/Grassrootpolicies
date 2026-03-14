import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <img
    src="/images/logo.png"
    alt="Grassroot Policies"
    style={{ width: '250px', height: '105px', objectFit: 'contain' }}
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Impact', path: '/impact' },
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Link to="/" style={{ marginLeft: '0px' }} className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={isActive(link.path) ? {
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '25px',
                  color: '#4E8B42',
                } : {
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '25px',
                  color: '#2D2D2D',
                }}
                className={`transition-all duration-200 whitespace-nowrap hover:opacity-80`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-involved"
              style={{
                backgroundColor: '#2e7d32',
                color: '#ffffff',
                padding: '14px 44px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                marginLeft: '16px',
                display: 'inline-block',
              }}
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 text-[14px] font-medium ${
                  isActive(link.path) ? 'text-dark' : 'text-text-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-[#2e7d32] text-white text-center px-5 py-2.5 rounded-full text-[13px] font-semibold mt-3"
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
