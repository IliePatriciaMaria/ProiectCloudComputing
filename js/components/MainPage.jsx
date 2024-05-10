import { useEffect, useState } from "react";

export default function MainPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/records', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecords(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (event) => {
    event.preventDefault();
    const id = event.target.id;
    try {
      const response = await fetch(`/api/records?id=${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setRecords(records.filter(record => record._id !== id));
    } catch (error) {
      console.log(error);
    }
  };


	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Cele mai noi filme 2024</p>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{record.name}
							</h5>
              <img class="h-auto max-w-full" src={record.image} alt="image of artist"></img>
							<p className="font-normal text-gray-700 dark:text-gray-400">
								{record.description}
							</p>
							<div className={"flex justify-center mt-4"}>
              <button type="button"
                id={record._id}
                onClick={deleteRecord}
                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">Delete
              </button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}