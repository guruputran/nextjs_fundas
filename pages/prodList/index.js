/** @format */

import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function productList() {
  const [prod, setprod] = useState([]);
  //   useEffect(() => {
  //     getData();
  //   }, []);
  //   async function getData() {
  //     const apiResponse = await fetch("/api/productList");
  //     const dataFromApiResponse = await apiResponse.json();
  //     const { pList } = dataFromApiResponse;
  //     if (pList && pList.length > 0) setprod(pList);
  //   }
  const { data, error, isLoading } = useSWR("/api/productList", fetcher);
  if (error) return <div>Error occured... please try again</div>;
  if (isLoading) return <div> Is Loading ....</div>;
  console.log(data, error);

  return (
    <div>
      {/* <ul>
        {prod.map((el) => {
          return (
            <li key={el.id}>
              <span className="text-purple-600 text-xl font-bold">
                {el.product}
              </span>
            </li>
          );
        })}
      </ul> */}
      <ul>
        {data &&
          data.pList.length > 0 &&
          data.pList.map((el) => {
            return (
              <li key={el.id}>
                <span className="text-purple-600 text-xl font-bold">
                  {el.product}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
