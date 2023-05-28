/** @format */

import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function swrExample() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );

  if (error) return <div>Error occured, pls try again!</div>;
  if (isLoading) return <div>Loading, pls wait...</div>;
  return (
    <div>
      <h2>This is swr Hook client side data fetching</h2>
      <ul>
        {data && data.products && data.products.length > 0
          ? data.products.map((item) => (
              <li className="m-2" key={item.id}>
                {item.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
