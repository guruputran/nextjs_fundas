/** @format */

import React from "react";
import Link from "next/link";

const the__list = [
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
];
export default function ListDetails(props) {
  const { id, name } = props;
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
      <h2>
        the id is : {id} and the name is: {name}
      </h2>
    </div>
  );
}

export async function getStaticPaths() {
  //create all paths here
  const allListItemPaths = the__list.map((item) => ({
    params: {
      details: item.id.toString(),
    },
  }));

  return {
    paths: allListItemPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { details } = params;
  //filter for detailed view from list
  const filteredListItem = the__list.find(
    (item) => item.id.toString() === details
  );
  console.log(filteredListItem);
  return {
    props: filteredListItem,
  };
}
