import { getMenuCategories } from '@/lib/cosmic';
import CategoryGrid from '@/components/CategoryGrid';

export const metadata = {
  title: 'Categories - My Company Restaurant',
};

export default async function CategoriesPage() {
  const categories = await getMenuCategories();

  return (
    <div className="bg-stone-50 min-h-screen">
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Menu Categories</h1>
          <p className="text-lg text-white/90">Explore our menu by category</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {categories.length === 0 ? (
            <p className="text-center text-gray-600">No categories available yet.</p>
          ) : (
            <CategoryGrid categories={categories} />
          )}
        </div>
      </section>
    </div>
  );
}