import React,{useEffect} from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import Echo from 'laravel-echo';
const Layout = ({ children }) => {
  const { flash } = usePage().props;
  const route = useRoute();

  // useEffect(() => {
  //   Echo.channel('score-updates').listen('update.score', (e) => console.warn('Score updated!',e));
  
  //   return () => {
  //     Echo.channel('score-updates').stopListening('update.score')
  //   }
  // }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <span className="text-xl font-bold">Home</span>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href={route('product.index')}
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  href={route('transaction.index')}
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Transactions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* {flash.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{flash.success}</span>
          </div>
        )}
        {flash.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{flash.error}</span>
          </div>
        )} */}
        {children}
      </main>
    </div>
  );
};

export default Layout;