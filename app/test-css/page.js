export default function TestCSS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          CSS Test Page
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          If you can see this styled content, Tailwind CSS is working correctly!
        </p>
        <div className="space-y-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">Blue Section</h2>
            <p className="text-blue-700">This should have a blue background and text.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Green Section</h2>
            <p className="text-green-700">This should have a green background and text.</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Red Section</h2>
            <p className="text-red-700">This should have a red background and text.</p>
          </div>
        </div>
        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          Test Button
        </button>
      </div>
    </div>
  );
}
