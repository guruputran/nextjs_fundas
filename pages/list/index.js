/** @format */

import React from "react";
import Link from "next/link";

export default function List({ myList, listOfDataFromApi }) {
  const { products } = listOfDataFromApi;
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
      <h2 className="text-2xl font-semibold mb-4">
        This is List folder, index.js file
      </h2>
      {/* <ul>
        <Link href="/list/1">
          <li>List 1</li>
        </Link>
        <Link href="/list/2">
          <li>List 2</li>
        </Link>
        <Link href="/list/3">
          <li>List 3</li>
        </Link>
      </ul> */}
      <ul>
        <h3 className="font-extrabold">Explicit Return</h3>
        {myList &&
          myList.length > 0 &&
          myList.map((el, indx) => {
            return <li key={indx}>{el.name}</li>;
          })}
      </ul>
      <ul>
        <h3 className="font-extrabold mt-5">Implicit Return</h3>
        {myList &&
          myList.length > 0 &&
          myList.map((el, indx) => <li key={indx}>{el.name}</li>)}
      </ul>
      <ul>
        <h3 className="font-extrabold mt-5">Conditional with a link</h3>
        {myList && myList.length > 0
          ? myList.map((el, indx) => (
              <Link key={indx} href={`/list/${el.id}`}>
                <a>
                  <li>{el.name}</li>
                </a>
              </Link>
            ))
          : null}
      </ul>
      <ul>
        <h3 className="text-2xl text-orange-600 font-semibold">DummyJSON</h3>
        {products &&
          products.length > 0 &&
          products.map((el, indx) => (
            <Link key={indx} href={`/list/${el.id}`}>
              <a>
                <li>
                  <p className="text-2xl text-blue-600">{el.title}</p>
                </li>
              </a>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const apiResponse = await fetch("https://dummyjson.com/products");
  const jsonResponseFromApiResponse = await apiResponse.json();
  console.log(jsonResponseFromApiResponse);
  return {
    props: {
      myList: [
        {
          id: 1,
          name: "List 1",
        },
        {
          id: 2,
          name: "List 2",
        },
        {
          id: 3,
          name: "List 3",
        },
      ],
      listOfDataFromApi: jsonResponseFromApiResponse,
    },
  };
}
