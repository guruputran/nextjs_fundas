/** @format */

import React from "react";
import Link from "next/link";
export default function getServerSidePropsExample(props) {
  const { getServerSideData } = props;
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
      <h2 className="text-2xl text-indigo-600 font-extrabold">
        Example using get server side props
      </h2>
      <ul>
        {getServerSideData && getServerSideData.length > 0
          ? getServerSideData.map((item) => (
              <li className="m-2" key={item.id}>
                {item.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
export async function getServerSideProps() {
  const apiResponse = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  const data = await apiResponse.json();
  return {
    props: {
      getServerSideData: data,
    },
  };
}
