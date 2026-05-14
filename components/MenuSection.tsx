import type { MenuCategory, MenuItem } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';
import MenuItemCard from '@/components/MenuItemCard';

export default function MenuSection({
  category,
  items,
}: {
  category: MenuCategory;
  items: MenuItem[];
}) {
  if (!items || items.length === 0) return null;

  const name = getMetafieldValue(category.metadata?.name) || category.title;
  const description = getMetafieldValue(category.metadata?.description);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-3">{name}</h2>
        {description && (
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
        )}
        <div className="w-16 h-1 bg-brand-500 mx-auto mt-6"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}