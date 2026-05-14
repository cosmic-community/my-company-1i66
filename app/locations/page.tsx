import { getLocations } from '@/lib/cosmic';
import LocationCard from '@/components/LocationCard';

export const metadata = {
  title: 'Locations - My Company Restaurant',
};

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our Locations</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Find the location nearest you and make a reservation
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {locations.length === 0 ? (
            <p className="text-center text-gray-600">No locations available yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}