import { useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Sunrise,
  Sun,
  Moon,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Wallet,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { generateTripPlan, type TripPlan } from "@/lib/planner";
import { formatPrice } from "@/data/packages";
import TourPackageCard from "@/components/TourPackageCard";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const interestOptions = [
  { id: "adventure", label: "Adventure & Outdoor" },
  { id: "culture", label: "Culture & History" },
  { id: "relaxation", label: "Relaxation & Beach" },
  { id: "food", label: "Food & Dining" },
  { id: "shopping", label: "Shopping & Entertainment" },
];

const travelTypeLabels: Record<string, string> = {
  solo: "Solo",
  couple: "Couple",
  family: "Family",
  friends: "Friends",
};

const Planner = () => {
  const navigate = useNavigate();
  const resultsRef = useRef<HTMLDivElement>(null);

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState([2000]);
  const [travelType, setTravelType] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [plan, setPlan] = useState<TripPlan | null>(null);

  const toggleInterest = (id: string) =>
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) {
      toast.error("Please enter a destination.");
      return;
    }
    if (!days) {
      toast.error("Please select how many days your trip is.");
      return;
    }
    if (!travelType) {
      toast.error("Please tell us who you're traveling with.");
      return;
    }
    if (interests.length === 0) {
      toast.error("Pick at least one interest so we can plan your days.");
      return;
    }

    const dayCount = { "1-3": 3, "4-7": 5, "8-14": 10, "15+": 15 }[days] ?? 5;
    const result = generateTripPlan({
      destination,
      days: dayCount,
      budget: budget[0],
      travelType,
      interests,
    });
    setPlan(result);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const reset = () => {
    setPlan(null);
    setDestination("");
    setDays("");
    setBudget([2000]);
    setTravelType("");
    setInterests([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const withinBudget = plan ? plan.estimatedCost <= budget[0] : true;

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
              Fill in the details below and get a day-by-day plan with a cost estimate
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
                  placeholder="Where do you want to go? e.g. Bali, Paris, Kyoto"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  maxLength={60}
                  required
                />
              </div>

              {/* Number of Days */}
              <div className="space-y-2">
                <Label htmlFor="days" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Number of Days
                </Label>
                <Select value={days} onValueChange={setDays} required>
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
                  Budget: {formatPrice(budget[0])}
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
                <Select value={travelType} onValueChange={setTravelType} required>
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
                <Label>Interests & Activities</Label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => toggleInterest(option.id)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition-smooth",
                        interests.includes(option.id)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-foreground hover:border-primary hover:text-primary"
                      )}
                      aria-pressed={interests.includes(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full gradient-hero">
                Create My Trip Plan
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Results */}
        {plan && (
          <div ref={resultsRef} className="max-w-5xl mx-auto mt-16 space-y-10">
            {/* Summary */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-3xl">
                  Your {plan.days.length}-Day Trip to {plan.destination}
                </CardTitle>
                <CardDescription className="text-base">
                  {travelTypeLabels[plan.travelType] ?? plan.travelType} trip &middot;{" "}
                  estimated total {formatPrice(plan.estimatedCost)} ({formatPrice(plan.perDay)}/day)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div
                  className={cn(
                    "flex items-start gap-3 rounded-lg p-4",
                    withinBudget ? "bg-primary/10 text-primary" : "bg-amber-500/10 text-amber-600"
                  )}
                >
                  {withinBudget ? (
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
                  )}
                  <p className="font-medium">
                    {withinBudget
                      ? `Great news — this plan fits within your ${formatPrice(budget[0])} budget.`
                      : `This plan is about ${formatPrice(plan.estimatedCost - budget[0])} over your ${formatPrice(budget[0])} budget. Trim a day or two, or move the budget slider up.`}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-primary" />
                    Estimated Cost Breakdown
                  </h3>
                  {plan.breakdown.map((line) => (
                    <div key={line.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{line.label}</span>
                        <span className="font-medium">{formatPrice(line.amount)}</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${line.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-muted p-4">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">{plan.tip}</p>
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {plan.days.map((day) => (
                  <Card key={day.day} className="shadow-soft">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl">
                        Day {day.day}: {day.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-3">
                      {[
                        { icon: Sunrise, label: "Morning", text: day.morning },
                        { icon: Sun, label: "Afternoon", text: day.afternoon },
                        { icon: Moon, label: "Evening", text: day.evening },
                      ].map((slot) => (
                        <div key={slot.label} className="space-y-1">
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                            <slot.icon className="h-4 w-4" />
                            {slot.label}
                          </div>
                          <p className="text-sm text-muted-foreground">{slot.text}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Matching Packages */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Packages That Match Your Trip</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plan.matches.map((pkg) => (
                  <TourPackageCard
                    key={pkg.title}
                    title={pkg.title}
                    image={pkg.image}
                    price={formatPrice(pkg.price)}
                    duration={`${pkg.durationDays} Days`}
                    location={pkg.location}
                    highlights={pkg.highlights}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg" onClick={() => navigate("/packages")}>
                  Browse All Packages
                </Button>
              </div>
            </div>

            <div className="text-center pb-8">
              <Button variant="secondary" size="lg" onClick={reset}>
                Plan Another Trip
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Planner;
