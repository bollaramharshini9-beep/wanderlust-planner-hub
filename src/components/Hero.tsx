import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Plan Your Perfect Trip
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
          Discover amazing destinations, create custom itineraries, and make memories that last forever
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 transition-smooth hover-lift"
            onClick={() => navigate("/planner")}
          >
            Start Planning
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 transition-smooth"
            onClick={() => navigate("/packages")}
          >
            View Packages
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6" />
            <div>
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-white/80">Destinations</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-white/80">Tour Packages</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            <div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-white/80">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
