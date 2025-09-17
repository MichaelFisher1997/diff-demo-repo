import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <nav class="bg-white shadow-sm border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <h1 class="text-xl font-bold text-gray-900">Minimal Site</h1>
            </div>
            <div class="flex items-center space-x-8">
              <a href="/" class="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="/pricing" class="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="/playground" class="text-gray-700 hover:text-gray-900 transition-colors">Playground</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer class="bg-gray-100 mt-20">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p class="text-center text-gray-600">© 2024 Minimal Site. Built with Astro and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}