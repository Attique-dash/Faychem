"use client";
import { useEffect, useState } from 'react';

export default function DebugCSS() {
  const [cssLoaded, setCssLoaded] = useState(false);
  const [tailwindClasses, setTailwindClasses] = useState([]);

  useEffect(() => {
    // Check if CSS is loaded
    const checkCSS = () => {
      const testElement = document.createElement('div');
      testElement.className = 'bg-blue-500 text-white p-4';
      testElement.style.position = 'absolute';
      testElement.style.left = '-9999px';
      document.body.appendChild(testElement);
      
      const computedStyle = window.getComputedStyle(testElement);
      const hasTailwind = computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' && 
                         computedStyle.backgroundColor !== 'transparent';
      
      document.body.removeChild(testElement);
      setCssLoaded(hasTailwind);
    };

    checkCSS();
  }, []);

  // Test various Tailwind classes
  const testClasses = [
    'bg-red-500',
    'text-white',
    'p-4',
    'rounded-lg',
    'shadow-lg',
    'hover:bg-blue-600',
    'transition-colors',
    'duration-300'
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">CSS Debug Page</h1>
        
        {/* CSS Status */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">CSS Status</h2>
          <div className="flex items-center space-x-4">
            <div className={`w-4 h-4 rounded-full ${cssLoaded ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-lg">
              Tailwind CSS: {cssLoaded ? '✅ Loaded' : '❌ Not Loaded'}
            </span>
          </div>
        </div>

        {/* Test Elements */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Test Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              Blue Background Test
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg">
              Green Background Test
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg">
              Red Background Test
            </div>
            <div className="bg-yellow-500 text-black p-4 rounded-lg">
              Yellow Background Test
            </div>
          </div>
        </div>

        {/* Responsive Test */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Responsive Test</h2>
          <div className="text-center">
            <div className="bg-purple-500 text-white p-4 rounded-lg md:bg-blue-500 lg:bg-green-500">
              This should change color on different screen sizes
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Purple on mobile, Blue on tablet, Green on desktop
            </p>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hover Effects</h2>
          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
              Hover Me
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-300">
              Hover Me Too
            </button>
          </div>
        </div>

        {/* Custom Classes */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Custom Classes</h2>
          <div className="space-y-4">
            <div className="bg-brand-primary text-white p-4 rounded-lg">
              Custom Brand Primary Color
            </div>
            <div className="bg-brand-secondary text-white p-4 rounded-lg">
              Custom Brand Secondary Color
            </div>
            <div className="bg-Org_them text-white p-4 rounded-lg">
              Custom Org Theme Color
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
