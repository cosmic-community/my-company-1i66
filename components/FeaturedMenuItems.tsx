import type { MenuItem } from '@/types';
import MenuItemCard from '@/components/MenuItemCard';

export default function FeaturedMenuItems({ items }: { items: MenuItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.slice(0, 6).map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}