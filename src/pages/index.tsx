import { type NextPage } from "next";
import Head from "next/head";
import Hero from "~/components/Hero";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const {data} = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>AI Fusion</title>
        <meta name="description" content="AI Fusion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <div>
          {data?.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.title}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
