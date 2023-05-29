/** @format */

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);
  useEffect(() => {
    if (session === undefined || session === null) router.push("/login");
  }, [router, session]);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
