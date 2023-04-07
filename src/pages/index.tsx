import { type NextPage } from "next";
import Head from "next/head";
import Grid from "~/components/Grid";
import Hero from "~/components/Hero";

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
        <div className="m-auto w-full px-6 py-12 md:px-24">
          <Grid />
        </div>
      </main>
    </>
  );
};

export default Home;
