import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Cloud, MapPin, Utensils, Compass, DollarSign } from "lucide-react";

const Destinations = () => {
  const destinations = [
    {
      name: "Maldives",
      region: "Asia",
      bestTime: "November - April",
      weather: "Tropical, 25-30°C year-round",
      attractions: ["White sandy beaches", "Coral reefs", "Water villas", "Marine life"],
      food: ["Fresh seafood", "Coconut curries", "Tropical fruits"],
      activities: ["Snorkeling", "Diving", "Island hopping", "Water sports"],
      cost: "$150-300 per day"
    },
    {
      name: "Swiss Alps",
      region: "Europe",
      bestTime: "December - March (skiing), June - September (hiking)",
      weather: "Alpine climate, varies by altitude",
      attractions: ["Snow-capped mountains", "Alpine villages", "Cable cars", "Glaciers"],
      food: ["Fondue", "Raclette", "Swiss chocolate", "Alpine cheese"],
      activities: ["Skiing", "Hiking", "Mountain climbing", "Scenic train rides"],
      cost: "$200-400 per day"
    },
    {
      name: "Paris",
      region: "Europe",
      bestTime: "April - June, September - October",
      weather: "Temperate, mild seasons",
      attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Versailles"],
      food: ["Croissants", "French pastries", "Fine dining", "Wine & cheese"],
      activities: ["Museum visits", "River cruises", "Shopping", "Architecture tours"],
      cost: "$150-350 per day"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Destination Explorer</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover detailed information about the world's most amazing destinations
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden shadow-medium">
              <CardHeader className="gradient-card">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">{dest.name}</CardTitle>
                    <CardDescription className="text-lg">
                      <Badge variant="secondary">{dest.region}</Badge>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="attractions">Attractions</TabsTrigger>
                    <TabsTrigger value="food">Food & Dining</TabsTrigger>
                    <TabsTrigger value="activities">Activities</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4 pt-4">
                    <div className="grid gap-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Best Time to Visit</h4>
                          <p className="text-muted-foreground">{dest.bestTime}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Cloud className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Weather</h4>
                          <p className="text-muted-foreground">{dest.weather}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Estimated Cost</h4>
                          <p className="text-muted-foreground">{dest.cost}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="attractions" className="pt-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-3">Top Attractions</h4>
                        <ul className="space-y-2">
                          {dest.attractions.map((attraction, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <span className="text-primary">•</span>
                              {attraction}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="food" className="pt-4">
                    <div className="flex items-start gap-3">
                      <Utensils className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-3">Local Cuisine</h4>
                        <ul className="space-y-2">
                          {dest.food.map((food, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <span className="text-primary">•</span>
                              {food}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="activities" className="pt-4">
                    <div className="flex items-start gap-3">
                      <Compass className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-3">Popular Activities</h4>
                        <ul className="space-y-2">
                          {dest.activities.map((activity, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <span className="text-primary">•</span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
