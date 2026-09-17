import Hero from "@/components/Hero";
import TourPackageCard from "@/components/TourPackageCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Compass, Shield, Clock, Heart } from "lucide-react";
import { tourPackages, formatPrice } from "@/data/packages";

const Home = () => {
  const navigate = useNavigate();

  const featuredPackages = tourPackages.slice(0, 3).map((pkg) => ({
    title: pkg.title,
    image: pkg.image,
    price: formatPrice(pkg.price),
    duration: `${pkg.durationDays} Days`,
    location: pkg.location,
    highlights: pkg.highlights,
  }));


  const features = [
    {
      icon: Compass,
      title: "Expert Planning",
      description: "Professional travel planners to create your perfect itinerary"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Travel with confidence with our safety measures and insurance"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service for your peace of mind"
    },
    {
      icon: Heart,
      title: "Best Experiences",
      description: "Curated experiences that create lasting memories"
    }
  ];

  return (
    <div>
      <Hero />

      {/* Featured Packages */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Popular Tour Packages</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our hand-picked selection of amazing travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredPackages.map((pkg, index) => (
            <TourPackageCard key={index} {...pkg} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate("/packages")}
            className="hover-lift"
          >
            View All Packages
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose TravelPortal</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We make your travel dreams come true with exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-background rounded-lg shadow-soft hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero text-white mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="gradient-hero rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let us help you plan the perfect trip tailored to your preferences
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            onClick={() => navigate("/planner")}
          >
            Plan My Trip
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
