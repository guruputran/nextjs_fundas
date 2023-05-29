/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useSafePush from "../hooks/useSafePush";
//https://www.udemy.com/course/next-js-course-for-beginners-2022-updated/learn/lecture/34147900#reviews
export default function HomePage() {
  const { safePush } = useSafePush();
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  useEffect(() => {
    if (session === undefined || session === null) safePush("/login");
  }, [router, session]);
  return (
    <div>
      <h1>Home Page</h1>
      <button
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={signOut}
      >
        Log Out
      </button>
    </div>
  );
}
