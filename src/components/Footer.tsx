import { Plane, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4">
              <Plane className="h-6 w-6" />
              <span>TravelPortal</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted partner in creating unforgettable travel experiences around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/packages" className="text-muted-foreground hover:text-primary transition-smooth">
                  Tour Packages
                </NavLink>
              </li>
              <li>
                <NavLink to="/planner" className="text-muted-foreground hover:text-primary transition-smooth">
                  Trip Planner
                </NavLink>
              </li>
              <li>
                <NavLink to="/destinations" className="text-muted-foreground hover:text-primary transition-smooth">
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink to="/tips" className="text-muted-foreground hover:text-primary transition-smooth">
                  Travel Tips
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@travelportal.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Travel St, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TravelPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
