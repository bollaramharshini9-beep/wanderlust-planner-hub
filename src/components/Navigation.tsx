import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, Plane } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/packages", label: "Packages" },
    { to: "/planner", label: "Planner" },
    { to: "/destinations", label: "Destinations" },
    { to: "/tips", label: "Tips" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Plane className="h-6 w-6" />
            <span>TravelPortal</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-foreground hover:text-primary transition-smooth"
                activeClassName="text-primary font-semibold"
              >
                {item.label}
              </NavLink>
            ))}
            <Button className="gradient-hero">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block py-2 text-foreground hover:text-primary transition-smooth"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button className="w-full gradient-hero mt-4">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
