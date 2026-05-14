import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-brand-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">Page not found</p>
        <Link
          href="/"
          className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}