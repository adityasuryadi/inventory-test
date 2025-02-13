import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

const Create = () => {
  const { data, setData, post, processing, errors } = useForm({
    sport_type: '',
    team_home: '',
    team_away: '',
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('match.store'));
  };

  return (
    <Layout>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Add New Product</h3>
            <p className="mt-1 text-sm text-gray-600">
              Create a new match.
            </p>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label htmlFor="sport_type" className="block text-sm font-medium text-gray-700">Sport Type</label>
                  <select name="sport_type" id="sport_type" value={data.sport_type}
                    onChange={e => setData('sport_type', e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <option value="">Select Sport Type</option>
                    <option value="soccer">Soccer</option>
                    <option value="basket">Basket Ball</option>
                    <option value="volley">Volley Ball</option>
                    <option value="badminton">Badminton</option>
                  </select>
                  {errors.sport_type && <div className="text-red-500">{errors.sport_type}</div>}
                </div>

                <div>
                  <label htmlFor="team_home" className="block text-sm font-medium text-gray-700">Team Home</label>
                  <input
                    type="text"
                    name="team_home"
                    id="team_home"
                    value={data.team_home}
                    onChange={e => setData('team_home', e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.team_home && <div className="text-red-500">{errors.team_home}</div>}
                </div>

                <div>
                  <label htmlFor="team_away" className="block text-sm font-medium text-gray-700">Team Away</label>
                  <input
                    type="text"
                    name="team_away"
                    id="team_away"
                    value={data.team_away}
                    onChange={e => setData('team_away', e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  {errors.team_away && <div className="text-red-500">{errors.team_away}</div>}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  disabled={processing}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save Match
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