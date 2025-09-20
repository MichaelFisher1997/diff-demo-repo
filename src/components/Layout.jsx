import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Modern Site</h1>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="/playground" className="text-gray-700 hover:text-gray-900 transition-colors">Playground</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer className="bg-gray-100 mt-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">© 2024 Modern Site. Built with Astro and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}