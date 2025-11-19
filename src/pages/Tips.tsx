import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Backpack, Shield, Wallet, Train } from "lucide-react";

const Tips = () => {
  const tipCategories = [
    {
      icon: Backpack,
      title: "Packing Tips",
      description: "Essential packing advice for stress-free travel",
      tips: [
        {
          q: "What should I pack for a beach vacation?",
          a: "Sunscreen (SPF 50+), swimwear, light clothing, sandals, sunglasses, hat, beach bag, and waterproof phone case. Don't forget after-sun lotion and a reusable water bottle."
        },
        {
          q: "How to pack light for long trips?",
          a: "Choose versatile clothing that can be mixed and matched. Roll clothes instead of folding. Use packing cubes. Wear your bulkiest items during travel. Pack travel-sized toiletries."
        },
        {
          q: "Essential items for any trip?",
          a: "Passport/ID, travel insurance documents, medications, chargers, universal adapter, basic first-aid kit, photocopies of important documents, and emergency contacts."
        }
      ]
    },
    {
      icon: Shield,
      title: "Safety Tips",
      description: "Stay safe and secure during your travels",
      tips: [
        {
          q: "How to stay safe in unfamiliar places?",
          a: "Research your destination beforehand, stay in well-lit areas, keep valuables hidden, use hotel safes, share your itinerary with someone, and trust your instincts."
        },
        {
          q: "Travel insurance - is it necessary?",
          a: "Yes! Travel insurance protects you from medical emergencies, trip cancellations, lost luggage, and other unforeseen events. It's a small cost for significant peace of mind."
        },
        {
          q: "Emergency preparedness tips?",
          a: "Know local emergency numbers, keep embassy contacts handy, have digital and physical copies of documents, maintain a small emergency cash reserve, and register with your embassy."
        }
      ]
    },
    {
      icon: Wallet,
      title: "Budget Travel",
      description: "Travel more while spending less",
      tips: [
        {
          q: "How to save money on accommodation?",
          a: "Book in advance, consider hostels or guesthouses, use comparison websites, travel during off-season, look for last-minute deals, or try home-sharing platforms."
        },
        {
          q: "Tips for eating on a budget?",
          a: "Eat where locals eat, shop at markets, cook some meals if possible, have lunch as your main meal (often cheaper), avoid tourist areas, and use restaurant discount apps."
        },
        {
          q: "Free activities in most destinations?",
          a: "Walking tours, public beaches, parks and gardens, free museum days, street markets, hiking trails, watching sunsets, and exploring neighborhoods."
        }
      ]
    },
    {
      icon: Train,
      title: "Transportation",
      description: "Navigate efficiently and affordably",
      tips: [
        {
          q: "Best ways to get around cities?",
          a: "Use public transportation (metro, buses, trams), walk when possible, rent bikes, use ride-sharing apps, or consider city passes for unlimited travel."
        },
        {
          q: "International flight booking tips?",
          a: "Book 2-3 months in advance, be flexible with dates, use incognito mode, compare multiple sites, consider connecting flights, and sign up for price alerts."
        },
        {
          q: "Airport transit tips?",
          a: "Arrive early (3 hours for international), check in online, pack carry-on strategically, wear comfortable shoes, download airline apps, and keep documents accessible."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Travel Tips & Guides</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expert advice to make your travels smoother and more enjoyable
          </p>
        </div>
      </section>

      {/* Tips Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8">
          {tipCategories.map((category, index) => (
            <Card key={index} className="shadow-medium">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full gradient-hero text-white">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.tips.map((tip, tipIndex) => (
                    <AccordionItem key={tipIndex} value={`item-${index}-${tipIndex}`}>
                      <AccordionTrigger className="text-left">
                        {tip.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {tip.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pro Tips Section */}
        <Card className="mt-8 gradient-hero text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Pro Travel Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="flex items-start gap-2">
              <span className="text-xl">✨</span>
              <span>Learn basic phrases in the local language - it goes a long way!</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-xl">✨</span>
              <span>Take photos of important documents and email them to yourself</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-xl">✨</span>
              <span>Pack a day bag for day trips and keep important items with you</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-xl">✨</span>
              <span>Download offline maps and translation apps before you go</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-xl">✨</span>
              <span>Be respectful of local customs and dress codes</span>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Tips;
