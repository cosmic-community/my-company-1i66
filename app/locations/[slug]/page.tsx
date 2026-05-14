// app/locations/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getLocationBySlug } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const name = getMetafieldValue(location.metadata?.name) || location.title;
  const address = getMetafieldValue(location.metadata?.address);
  const phone = getMetafieldValue(location.metadata?.phone);
  const email = getMetafieldValue(location.metadata?.email);
  const hours = getMetafieldValue(location.metadata?.hours);
  const mapUrl = getMetafieldValue(location.metadata?.map_url);
  const reservationUrl = getMetafieldValue(location.metadata?.reservation_url);
  const photo = location.metadata?.photo;

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 h-full flex items-end px-4 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white">{name}</h1>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {address && (
              <div>
                <h2 className="font-serif text-2xl font-bold mb-2 text-brand-700">Address</h2>
                <p className="text-gray-700 text-lg whitespace-pre-line">{address}</p>
              </div>
            )}

            {hours && (
              <div>
                <h2 className="font-serif text-2xl font-bold mb-2 text-brand-700">Hours</h2>
                <p className="text-gray-700 text-lg whitespace-pre-line">{hours}</p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              {phone && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href={`tel:${phone}`} className="text-brand-600 hover:text-brand-700">
                    {phone}
                  </a>
                </div>
              )}
              {email && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href={`mailto:${email}`} className="text-brand-600 hover:text-brand-700">
                    {email}
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {reservationUrl && (
                <a
                  href={reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full text-center transition-colors"
                >
                  Make a Reservation
                </a>
              )}
              {mapUrl && (
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-full text-center transition-colors"
                >
                  Get Directions
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}