import React, { useState } from 'react';
import { Link, usePage,useForm } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

const Create = ({ products }) => {
    const [details, setDetails] = useState([{ id_produk: '', quantity: '' }]);
    const { data, setData, post, processing, errors } = useForm({
      details: details,
    });
  
    const addDetail = () => {
      setDetails([...details, { id_produk: '', quantity: '' }]);
    };
  
    const getError = (index, field) => {
      // Check for errors like "items.0.name" or "items.0.price"
      console.warn(errors[`details[${index}][${field}]`]);
      return errors[`details.${index}.${field}`] || 
             // Also check for array format like "details[0][name]"
             errors[`details[${index}][${field}]`];
    };

    const removeDetail = (index) => {
      const newDetails = [...details];
      newDetails.splice(index, 1);
      setDetails(newDetails);
    };
  
    const updateDetail = (index, field, value) => {
      const newDetails = [...details];
      newDetails[index][field] = value;
      setDetails(newDetails);
      setData('details', newDetails);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      post(route('transaction.store'));
    };
  
    return (
      <Layout>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">New Transaction</h3>
              <p className="mt-1 text-sm text-gray-600">
                Create a new transaction with multiple products.
                {/* {errors.details && JSON.stringify(errors.details["details.0.id_produk"])} */}
              </p>
            </div>
          </div>
  
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  {details.map((detail, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Product</label>
                        <select
                          value={detail.id_produk}
                          onChange={(e) => updateDetail(index, 'id_produk', e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">Select a product</option>
                          {products.map((product) => (
                            <option key={product.id} value={product.id}>
                              {product.produk} - Rp {product.harga.toLocaleString()}
                            </option>
                          ))} 
                        </select>
                        {getError(index, 'id_produk') && (
              <span className="text-red-500 text-sm mt-1">
                {getError(index, 'id_produk')}
              </span>
            )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Quantity</label>
                        <input
                          type="number"
                          value={detail.quantity}
                          onChange={(e) => updateDetail(index, 'quantity', e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                         {getError(index, 'quantity') && (
              <span className="text-red-500 text-sm mt-1">
                {getError(index, 'quantity')}
              </span>
            )}
                      </div>
                      <div className="flex items-end">
                        <button
                          type="button"
                          onClick={() => removeDetail(index)}
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addDetail}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Product
                  </button>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    disabled={processing}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create Transaction
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