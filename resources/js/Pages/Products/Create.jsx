import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

const Create = () => {
  const { data, setData, post, processing, errors } = useForm({
    produk: '',
    stok: '',
    harga: '',
  });
  const { auth } = usePage().props;

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('product.store'));
  };

  return (
    <Layout>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Product</h3>
            <p className="mt-1 text-sm text-gray-600">
              Create a new product in the inventory system.
            </p>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label htmlFor="produk" className="block text-sm font-medium text-gray-700">Product Name</label>
                  <input
                    type="text"
                    name="produk"
                    id="produk"
                    value={data.produk}
                    onChange={e => setData('produk', e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.produk && <div className="text-red-500">{errors.produk}</div>}
                </div>

                <div>
                  <label htmlFor="stok" className="block text-sm font-medium text-gray-700">Stock</label>
                  <input
                    type="number"
                    name="stok"
                    id="stok"
                    value={data.stok}
                    onChange={e => setData('stok', e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.stok && <div className="text-red-500">{errors.stok}</div>}
                </div>

                <div>
                  <label htmlFor="harga" className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="number"
                    name="harga"
                    id="harga"
                    value={data.harga}
                    onChange={e => setData('harga', e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.harga && <div className="text-red-500">{errors.harga}</div>}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  disabled={processing}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Create;