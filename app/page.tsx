import Link from 'next/link';
import { getFeaturedMenuItems, getLocations, getMenuCategories } from '@/lib/cosmic';
import FeaturedMenuItems from '@/components/FeaturedMenuItems';
import LocationCard from '@/components/LocationCard';
import CategoryGrid from '@/components/CategoryGrid';

export default async function HomePage() {
  const [featured, locations, categories] = await Promise.all([
    getFeaturedMenuItems(),
    getLocations(),
    getMenuCategories(),
  ]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://imgix.cosmicjs.com/362208b0-4f89-11f1-8004-49554e815733-autopilot-photo-1414235077428-338989a2e8c0-1778758616239.jpeg?w=2400&h=1600&fit=crop&auto=format,compress"
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            A Culinary Experience
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Discover exceptional flavors crafted with the finest seasonal ingredients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/locations"
              className="px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 border border-white text-white font-semibold rounded-full transition-colors"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      {featured.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Chef's Selections</h2>
              <p className="text-gray-600 text-lg">Our most beloved dishes</p>
            </div>
            <FeaturedMenuItems items={featured} />
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-20 px-4 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Explore Our Menu</h2>
              <p className="text-gray-600 text-lg">A journey through every course</p>
            </div>
            <CategoryGrid categories={categories} />
          </div>
        </section>
      )}

      {/* Locations */}
      {locations.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
              <p className="text-gray-600 text-lg">Find the location nearest you</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}