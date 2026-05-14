import Link from 'next/link';
import type { Location } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function LocationCard({ location }: { location: Location }) {
  const name = getMetafieldValue(location.metadata?.name) || location.title;
  const address = getMetafieldValue(location.metadata?.address);
  const phone = getMetafieldValue(location.metadata?.phone);
  const hours = getMetafieldValue(location.metadata?.hours);
  const photo = location.metadata?.photo;
  const reservationUrl = getMetafieldValue(location.metadata?.reservation_url);

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {photo && (
        <div className="h-48 overflow-hidden">
          <img
            src={`${photo.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{name}</h3>
        {address && (
          <p className="text-gray-600 text-sm mb-2 whitespace-pre-line">{address}</p>
        )}
        {phone && (
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Phone:</span> {phone}
          </p>
        )}
        {hours && (
          <p className="text-gray-600 text-sm mb-4 whitespace-pre-line line-clamp-3">{hours}</p>
        )}
        <div className="flex gap-3 mt-4">
          <Link
            href={`/locations/${location.slug}`}
            className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-full text-sm text-center transition-colors"
          >
            Details
          </Link>
          {reservationUrl && (
            <a
              href={reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-full text-sm text-center transition-colors"
            >
              Reserve
            </a>
          )}
        </div>
      </div>
    </article>
  );
}