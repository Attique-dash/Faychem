export default function TestBuild() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Build Test Successful!</h1>
        <p className="text-gray-600 mb-6">
          If you can see this page with proper styling, your Next.js build is working correctly.
        </p>
        
        <div className="space-y-3">
          <div className="bg-blue-100 p-3 rounded-lg">
            <p className="text-blue-800 font-medium">✅ Tailwind CSS Working</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <p className="text-green-800 font-medium">✅ Build Process Working</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg">
            <p className="text-purple-800 font-medium">✅ Page Rendering Working</p>
          </div>
        </div>
        
        <a 
          href="/"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
