import { Compass, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">SpatialScope</span>
            </div>
            <p className="text-sm">
              Transforming spaces into extraordinary experiences through innovative design and strategic planning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@spatialscope.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Design Street, Creative City</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday</li>
              <li className="text-primary">9:00 AM - 6:00 PM</li>
              <li>Saturday</li>
              <li className="text-primary">10:00 AM - 4:00 PM</li>
              <li>Sunday</li>
              <li className="text-primary">Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SpatialScope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;