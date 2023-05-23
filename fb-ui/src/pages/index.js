import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Facebook clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
    </div>
  );
}
