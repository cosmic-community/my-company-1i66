import type { MenuItem } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const name = getMetafieldValue(item.metadata?.name) || item.title;
  const description = getMetafieldValue(item.metadata?.description);
  const price = getMetafieldValue(item.metadata?.price);
  const image = item.metadata?.image;
  const dietaryTags = Array.isArray(item.metadata?.dietary_tags) ? item.metadata.dietary_tags : [];
  const featured = item.metadata?.featured;

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {featured && (
            <span className="absolute top-3 right-3 px-3 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-serif text-xl font-bold text-gray-900">{name}</h3>
          {price && (
            <span className="text-brand-600 font-bold text-lg whitespace-nowrap">
              ${price}
            </span>
          )}
        </div>
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        )}
        {dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {dietaryTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded"
              >
                {getMetafieldValue(tag)}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}