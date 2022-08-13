import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Roublabot</title>
        <meta name="description" content="Roublabot landing page" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="bg-neutral-800">
        <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
          <Image
            src="/roublabot.png"
            width={200}
            height={200}
            alt="A picture of a roublabot invocation"
          />
        </div>
        <div className="fixed w-full bottom-0 flex justify-center">
          <a href="https://github.com/roublabot" target="blank">
            <div className="flex text-white mb-4 text-xl hover:text-neutral-400">
              <FontAwesomeIcon className="w-4 mr-1" icon={faGithub} />
              Roublabot
            </div>
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
