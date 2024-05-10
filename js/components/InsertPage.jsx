// js/components/InsertPage.jsx
import { useState } from 'react';

export default function InsertPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photoLink, setPhotoLink] = useState('');

  const insertRecord = (event) => {
    event.preventDefault();
    const data = { name, description, photoLink };
    fetch('/api/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      console.log('New record inserted');
      setName('');
      setDescription('');
      setPhotoLink('');
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <p className="w-[1000px] mx-auto text-center mt-4 text-3xl">
           This page helps admin to add info about artists
        </p>

        <form>
        <div className="mb-6">
            <label
              htmlFor="photoLink"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Photo link
            </label>
            <input
              type="text"
              id="photoLink"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={photoLink}
              onChange={(e) => setPhotoLink(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Artist name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Artist description
            </label>
            <textarea
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
         
          <button
            type="submit"
            onClick={insertRecord}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
