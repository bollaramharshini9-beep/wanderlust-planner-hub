import { tourPackages, type TourPackage } from "@/data/packages";

export interface ItineraryDay {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
}

export interface CostLine {
  label: string;
  amount: number;
  percent: number;
}

export interface PlannerInput {
  destination: string;
  days: number;
  budget: number;
  travelType: string;
  interests: string[];
}

export interface TripPlan {
  destination: string;
  travelType: string;
  days: ItineraryDay[];
  estimatedCost: number;
  perDay: number;
  breakdown: CostLine[];
  tip: string;
  matches: TourPackage[];
}

const pools: Record<string, { morning: string[]; afternoon: string[]; evening: string[] }> = {
  adventure: {
    morning: [
      "Early guided hike through scenic trails near {d}",
      "Kayaking or water sports session",
      "Cycling tour around the outskirts of {d}",
    ],
    afternoon: [
      "Rock climbing or zip-lining adventure",
      "Off-road safari excursion",
      "Visit a national park or nature reserve near {d}",
    ],
    evening: [
      "Campfire dinner under the stars",
      "Sunset trek to a panoramic viewpoint",
      "Hearty dinner at a traveler-favorite lodge",
    ],
  },
  culture: {
    morning: [
      "Guided walking tour of {d}'s historic old quarter",
      "Visit the top museum in {d}",
      "Explore the landmark monuments of {d}",
    ],
    afternoon: [
      "Heritage site visit with a local guide",
      "Craft markets and artisan workshops",
      "Architecture tour through {d}'s oldest streets",
    ],
    evening: [
      "Traditional cultural performance in {d}",
      "Dinner at a heritage restaurant in {d}",
      "Evening stroll through the illuminated old town",
    ],
  },
  relaxation: {
    morning: [
      "Slow breakfast, then beach or pool time",
      "Morning yoga session overlooking {d}",
      "Spa and wellness treatment",
    ],
    afternoon: [
      "Leisurely café hopping and reading time",
      "Scenic boat cruise around {d}",
      "Lazy afternoon by the water with sunset drinks",
    ],
    evening: [
      "Seafood dinner at a beachfront restaurant in {d}",
      "Candle-lit dinner with a view over {d}",
      "Evening walk along the promenade",
    ],
  },
  food: {
    morning: [
      "Breakfast at a famous local bakery in {d}",
      "Guided food market tour through {d}",
      "Cooking class covering local breakfast dishes",
    ],
    afternoon: [
      "Street food crawl through the heart of {d}",
      "Visit local producers for tastings",
      "Long, unhurried lunch at a chef-led restaurant",
    ],
    evening: [
      "Dinner at {d}'s most-loved local restaurant",
      "Night market food tour",
      "Dessert and coffee at a historic café",
    ],
  },
  shopping: {
    morning: [
      "Browse the main shopping district of {d}",
      "Visit local boutiques and galleries",
      "Morning market hunt for souvenirs in {d}",
    ],
    afternoon: [
      "Designer stores and mall visits",
      "Antique and vintage shopping in {d}",
      "Coffee break at a stylish local café",
    ],
    evening: [
      "Dinner and people-watching at a buzzy square in {d}",
      "Evening shopping at the night bazaars",
      "Catch a show or live music in {d}",
    ],
  },
};

const generic = {
  afternoon: [
    "Free time to wander and discover hidden gems in {d}",
    "Visit the scenic viewpoint above {d}",
    "Pick any sight you missed — today stays flexible",
  ],
  evening: [
    "Dinner at a well-reviewed local restaurant in {d}",
    "Catch the sunset, then dinner nearby",
    "Unwind at the hotel and plan tomorrow",
  ],
};

const interestLabels: Record<string, string> = {
  adventure: "Adventure",
  culture: "Culture & History",
  relaxation: "Relaxation",
  food: "Food & Dining",
  shopping: "Shopping",
};

const costMultipliers: Record<string, number> = {
  adventure: 1.15,
  culture: 1.05,
  relaxation: 1,
  food: 1.1,
  shopping: 1.2,
};

const groupMultipliers: Record<string, number> = {
  solo: 1,
  couple: 1.8,
  family: 3.4,
  friends: 2.4,
};

const travelTips: Record<string, string> = {
  solo: "Join group day tours — they're a great way to meet other travelers.",
  couple: "Book one special dinner in advance; the best tables fill up fast.",
  family: "Choose stays with family rooms and plan one kid-friendly activity per day.",
  friends: "Vacation rentals usually cost less per person than hotel rooms for groups.",
};

const fill = (text: string, dest: string) => text.replace(/\{d\}/g, dest);
const pick = (arr: string[], i: number) => arr[i % arr.length];

export function generateTripPlan(input: PlannerInput): TripPlan {
  const dest = input.destination.trim();
  const totalDays = Math.min(Math.max(input.days, 2), 15);
  const interests = input.interests.length ? input.interests : ["culture"];

  const days: ItineraryDay[] = [];
  const last = totalDays;

  for (let d = 1; d <= totalDays; d++) {
    const interest = interests[(d - 2) % interests.length];
    const pool = pools[interest] ?? pools.culture;

    if (d === 1) {
      days.push({
        day: d,
        title: `Arrival in ${dest}`,
        morning: fill("Arrive in {d}, check in and freshen up", dest),
        afternoon: fill(pick(pool.afternoon, 0), dest),
        evening: "Easy dinner near your hotel and an early night",
      });
    } else if (d === last) {
      days.push({
        day: d,
        title: `Departure from ${dest}`,
        morning: fill("Souvenir shopping and one last stroll through {d}", dest),
        afternoon: "Check out and transfer to the airport",
        evening: "Homeward bound — or extend your stay!",
      });
    } else {
      days.push({
        day: d,
        title: `${interestLabels[interest] ?? "Discovery"} day in ${dest}`,
        morning: fill(pick(pool.morning, d), dest),
        afternoon: fill(d % 3 === 0 ? pick(generic.afternoon, d) : pick(pool.afternoon, d), dest),
        evening: fill(d % 2 === 0 ? pick(pool.evening, d) : pick(generic.evening, d), dest),
      });
    }
  }

  const interestMult =
    interests.reduce((sum, i) => sum + (costMultipliers[i] ?? 1), 0) / interests.length;
  const groupMult = groupMultipliers[input.travelType] ?? 1;
  const estimatedCost =
    Math.round((120 * interestMult * groupMult * totalDays) / 5) * 5;
  const perDay = Math.round(estimatedCost / totalDays);

  const breakdown: CostLine[] = [
    { label: "Stay", percent: 40 },
    { label: "Food", percent: 25 },
    { label: "Activities", percent: 20 },
    { label: "Local transport", percent: 15 },
  ].map((b) => ({
    ...b,
    amount: Math.round((estimatedCost * b.percent) / 100),
  }));

  const words = dest.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 2);
  const matches = [...tourPackages]
    .map((p) => {
      let score = 0;
      const haystack = `${p.location} ${p.title}`.toLowerCase();
      if (words.some((w) => haystack.includes(w))) score += 4;
      score += Math.max(0, 3 - Math.abs(p.durationDays - totalDays) / 3);
      score += p.price <= input.budget ? 2 : -Math.min(3, (p.price - input.budget) / 400);
      return { p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.p);

  return {
    destination: dest,
    travelType: input.travelType,
    days,
    estimatedCost,
    perDay,
    breakdown,
    tip: fill(travelTips[input.travelType] ?? "", dest),
    matches,
  };
}
