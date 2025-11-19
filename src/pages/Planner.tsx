import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Calendar, Users, DollarSign, MapPin } from "lucide-react";
import { toast } from "sonner";

const Planner = () => {
  const [budget, setBudget] = useState([2000]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Trip plan created! We'll send you personalized recommendations.");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Trip Planner</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Tell us about your dream vacation and we'll create the perfect itinerary
          </p>
        </div>
      </section>

      {/* Planner Form */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto shadow-medium">
          <CardHeader>
            <CardTitle className="text-3xl">Plan Your Journey</CardTitle>
            <CardDescription>
              Fill in the details below and let us craft your perfect travel experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Destination
                </Label>
                <Input 
                  id="destination"
                  placeholder="Where do you want to go?"
                  required
                />
              </div>

              {/* Number of Days */}
              <div className="space-y-2">
                <Label htmlFor="days" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Number of Days
                </Label>
                <Select required>
                  <SelectTrigger id="days">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1-3 Days</SelectItem>
                    <SelectItem value="4-7">4-7 Days</SelectItem>
                    <SelectItem value="8-14">8-14 Days</SelectItem>
                    <SelectItem value="15+">15+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  Budget: ${budget[0]}
                </Label>
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  min={500}
                  max={10000}
                  step={100}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$500</span>
                  <span>$10,000+</span>
                </div>
              </div>

              {/* Travel Type */}
              <div className="space-y-2">
                <Label htmlFor="travel-type" className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Travel Type
                </Label>
                <Select required>
                  <SelectTrigger id="travel-type">
                    <SelectValue placeholder="Who are you traveling with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo</SelectItem>
                    <SelectItem value="couple">Couple</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="friends">Friends</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Interests */}
              <div className="space-y-2">
                <Label htmlFor="interests">Interests & Activities</Label>
                <Select required>
                  <SelectTrigger id="interests">
                    <SelectValue placeholder="What are you interested in?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure & Outdoor</SelectItem>
                    <SelectItem value="culture">Culture & History</SelectItem>
                    <SelectItem value="relaxation">Relaxation & Beach</SelectItem>
                    <SelectItem value="food">Food & Dining</SelectItem>
                    <SelectItem value="shopping">Shopping & Entertainment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full gradient-hero">
                Create My Trip Plan
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          <Card className="text-center p-6">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="font-bold mb-2">Personalized</h3>
            <p className="text-sm text-muted-foreground">Tailored to your preferences</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-bold mb-2">Instant</h3>
            <p className="text-sm text-muted-foreground">Get results immediately</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-4xl mb-2">💎</div>
            <h3 className="font-bold mb-2">Premium</h3>
            <p className="text-sm text-muted-foreground">Best recommendations</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Planner;
