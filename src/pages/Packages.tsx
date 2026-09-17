import TourPackageCard from "@/components/TourPackageCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { tourPackages, formatPrice } from "@/data/packages";

const Packages = () => {
  const packages = tourPackages;


  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Browse our collection of carefully curated travel experiences
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Destinations</SelectItem>
                <SelectItem value="beach">Beach</SelectItem>
                <SelectItem value="mountain">Mountain</SelectItem>
                <SelectItem value="city">City</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Duration</SelectItem>
                <SelectItem value="short">1-5 Days</SelectItem>
                <SelectItem value="medium">6-10 Days</SelectItem>
                <SelectItem value="long">11+ Days</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Budget</SelectItem>
                <SelectItem value="budget">Under $1000</SelectItem>
                <SelectItem value="mid">$1000-$1500</SelectItem>
                <SelectItem value="luxury">$1500+</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">Reset Filters</Button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <TourPackageCard
              key={index}
              title={pkg.title}
              image={pkg.image}
              price={formatPrice(pkg.price)}
              duration={`${pkg.durationDays} Days`}
              location={pkg.location}
              highlights={pkg.highlights}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;
