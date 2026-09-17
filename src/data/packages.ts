import beachImage from "@/assets/package-beach.jpg";
import mountainImage from "@/assets/package-mountain.jpg";
import cityImage from "@/assets/package-city.jpg";

export interface TourPackage {
  title: string;
  image: string;
  price: number;
  durationDays: number;
  location: string;
  highlights: string[];
}

export const tourPackages: TourPackage[] = [
  {
    title: "Tropical Paradise",
    image: beachImage,
    price: 1299,
    durationDays: 7,
    location: "Maldives",
    highlights: [
      "Luxury beachfront resort",
      "Snorkeling & diving",
      "All meals included",
      "Spa treatments",
    ],
  },
  {
    title: "Mountain Adventure",
    image: mountainImage,
    price: 899,
    durationDays: 5,
    location: "Swiss Alps",
    highlights: [
      "Guided hiking tours",
      "Mountain lodge stay",
      "Cable car rides",
      "Local cuisine",
    ],
  },
  {
    title: "Cultural Explorer",
    image: cityImage,
    price: 1499,
    durationDays: 10,
    location: "Europe",
    highlights: [
      "Visit 5 cities",
      "Historical tours",
      "Museum passes",
      "Local guides",
    ],
  },
  {
    title: "Island Hopping",
    image: beachImage,
    price: 1599,
    durationDays: 12,
    location: "Greece",
    highlights: [
      "Visit 4 Greek islands",
      "Ferry transfers included",
      "Beach resorts",
      "Historical sites",
    ],
  },
  {
    title: "Desert Safari",
    image: mountainImage,
    price: 799,
    durationDays: 4,
    location: "Dubai",
    highlights: [
      "Dune bashing",
      "Camel riding",
      "Luxury desert camp",
      "Traditional dinner",
    ],
  },
  {
    title: "Asian Discovery",
    image: cityImage,
    price: 1799,
    durationDays: 14,
    location: "Southeast Asia",
    highlights: [
      "Thailand, Vietnam, Cambodia",
      "Cultural immersion",
      "Street food tours",
      "Ancient temples",
    ],
  },
];

export const formatPrice = (amount: number) => `$${amount.toLocaleString("en-US")}`;
