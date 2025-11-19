import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Clock, MapPin, DollarSign } from "lucide-react";

interface TourPackageCardProps {
  title: string;
  image: string;
  price: string;
  duration: string;
  location: string;
  highlights: string[];
}

const TourPackageCard = ({ title, image, price, duration, location, highlights }: TourPackageCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold text-sm">
          {price}
        </div>
      </div>
      
      <CardHeader>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Highlights:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full gradient-hero">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default TourPackageCard;
