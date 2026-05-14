import Link from 'next/link';
import type { MenuCategory } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function CategoryGrid({ categories }: { categories: MenuCategory[] }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => {
        const name = getMetafieldValue(category.metadata?.name) || category.title;
        const description = getMetafieldValue(category.metadata?.description);
        return (
          <Link
            key={category.id}
            href="/menu"
            className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center"
          >
            <div className="w-16 h-16 bg-brand-100 group-hover:bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
              <span className="text-3xl">🍽️</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{name}</h3>
            {description && (
              <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
            )}
          </Link>
        );
      })}
    </div>
  );
}