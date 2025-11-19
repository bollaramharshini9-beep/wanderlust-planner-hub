import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to 150+ destinations worldwide with local expertise"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional travel planners with years of experience"
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Award-winning customer service and satisfaction"
    },
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We love travel and want to share that passion with you"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About TravelPortal</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At TravelPortal, we believe that travel is more than just visiting new places—it's about 
            creating memories, experiencing new cultures, and discovering yourself. Our mission is to 
            make travel planning effortless and accessible to everyone, while ensuring each journey 
            is personalized, safe, and unforgettable.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover-lift">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero text-white mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 2020, TravelPortal was born from a simple idea: travel planning should be 
              exciting, not overwhelming. Our founders, passionate travelers themselves, recognized 
              the need for a comprehensive platform that combines expert knowledge with modern technology.
            </p>
            <p>
              What started as a small team of travel enthusiasts has grown into a global network of 
              destination experts, local guides, and travel professionals. We've helped thousands of 
              travelers discover the world, from backpackers seeking adventure to families looking for 
              the perfect vacation.
            </p>
            <p>
              Today, TravelPortal continues to innovate in the travel industry, offering personalized 
              trip planning, curated tour packages, and comprehensive destination guides. Our commitment 
              remains the same: to inspire and enable people to explore the world with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Tour Packages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
