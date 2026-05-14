import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍴</span>
              <span className="font-serif text-xl font-bold text-white">My Company</span>
            </Link>
            <p className="text-sm text-gray-400">
              A culinary experience crafted with passion and the finest ingredients.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="hover:text-brand-400">Menu</Link></li>
              <li><Link href="/categories" className="hover:text-brand-400">Categories</Link></li>
              <li><Link href="/locations" className="hover:text-brand-400">Locations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Visit</h3>
            <p className="text-sm">Make a reservation today and join us for an unforgettable meal.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} My Company Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}