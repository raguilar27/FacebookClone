import Head from "next/head";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Login from "@/components/Login";
import { getSession } from "next-auth/react";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />
        {/* Feed (Create Post and Posts) */}
        {/* Right Sidebar */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
