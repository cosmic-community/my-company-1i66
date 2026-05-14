import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur bg-white/95">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍴</span>
          <span className="font-serif text-xl font-bold text-gray-900">My Company</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
            Menu
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
            Categories
          </Link>
          <Link href="/locations" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
            Locations
          </Link>
        </nav>
        <Link
          href="/locations"
          className="px-5 py-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full text-sm transition-colors"
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}