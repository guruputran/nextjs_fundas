/** @format */

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ListDetails() {
  const router = useRouter();
  const { query } = router;
  const { details } = query;
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
      <Link href="/list">
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          List
        </button>
      </Link>
      <h2 className="text-3xl text-pink-600 font-bold">
        List details for {details}
      </h2>
    </div>
  );
}
