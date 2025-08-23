import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Go Back Home
          </Link>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
            >
              Contact Us
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href="/#about"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
