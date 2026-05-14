import { getMenuCategories, getMenuItems } from '@/lib/cosmic';
import MenuSection from '@/components/MenuSection';
import type { MenuItem } from '@/types';

export const metadata = {
  title: 'Menu - My Company Restaurant',
};

export default async function MenuPage() {
  const [categories, items] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
  ]);

  // Group items by category
  const itemsByCategory: Record<string, MenuItem[]> = {};
  items.forEach((item) => {
    const categoryId = item.metadata?.category?.id;
    if (categoryId) {
      if (!itemsByCategory[categoryId]) {
        itemsByCategory[categoryId] = [];
      }
      itemsByCategory[categoryId]?.push(item);
    }
  });

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Thoughtfully crafted dishes using the freshest seasonal ingredients
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {categories.length === 0 ? (
            <p className="text-center text-gray-600">No menu categories available.</p>
          ) : (
            categories.map((category) => {
              const categoryItems = itemsByCategory[category.id];
              if (!categoryItems || categoryItems.length === 0) {
                return null;
              }
              return (
                <MenuSection
                  key={category.id}
                  category={category}
                  items={categoryItems}
                />
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}