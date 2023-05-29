/** @format */

import React from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSafePush from "../../hooks/useSafePush";

export default function LoginPage() {
  const { safePush } = useSafePush();
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session", session);
  useEffect(() => {
    if (session) safePush("/");
  }, [session, router]);
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
      <p> {session && session.user && session.user.name}</p>
      <p> {session && session.user && session.user.email}</p>
      <h1>Login__Page</h1>
      <button
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={signIn}
      >
        LogIn
      </button>
    </div>
  );
}
