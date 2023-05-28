/** @format */

import Link from "next/link";
import { useEffect, useState } from "react";

export default function clientSideDataFetching() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    //loading state
    setLoading(true);
    //trigger getdata method
    getData();
  }, []);

  async function getData() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const datafromapi = await apiResponse.json();
    const { products } = datafromapi;
    setTimeout(() => {
      if (products && products.length > 0) {
        setLoading(false);
        setData(products);
      }
    }, 2000);
  }

  if (loading) {
    return <div>Loading data! Pls wait...</div>;
  }
  return (
    <div>
      <Link href="/">
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Home Page
        </button>
      </Link>
      <h2 className="text-red-500 font-medium">Client side data fetch</h2>
      <ul>
        {data && data.length > 0
          ? data.map((item) => (
              <li className="m-2" key={item.id}>
                {item.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
