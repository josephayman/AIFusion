import { type NextPage } from "next";
import Head from "next/head";
import Grid from "~/components/Grid";
import Hero from "~/components/Hero";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AI Fusion</title>
        <meta name="description" content="AI Fusion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <div className="w-full px-24 py-12">
          <Grid />
        </div>
      </main>
    </>
  );
};

export default Home;
