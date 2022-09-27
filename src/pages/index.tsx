import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ProjectCard, ProjectCardProps } from '../components/projectItem';

const projects: Array<ProjectCardProps> = [
  {
    name: 'La bloqueuse',
    description:
      'Dynamic client patcher and proxy server with packet injection.',
    src: '/la-bloqueuse.png',
    width: 200,
    height: 200,
    alt: 'Poupée sadida, la bloqueuse',
  },
  {
    name: 'Le concasseur',
    description:
      "Extract dofus source code and assets, directly from ankama's servers.",
    src: '/le-concasseur.png',
    width: 197,
    height: 244,
    alt: 'Concasseur pour la forgemagie',
  },
];

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

        <meta property="og:title" content="Roublabot" />
        <meta property="og:site_name" content="Roublabot" />
        <meta property="og:url" content="roublabot.fr" />
        <meta property="og:description" content="Roublabot landing page." />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://roublabot.fr/roublabot.png"
        />
      </Head>

      <div className="flex flex-col justify-between h-screen  bg-neutral-800 text-white ">
        <main className="container mx-auto flex flex-col h-full items-center justify-around p-4">
          <Image
            src="/roublabot.png"
            width={200}
            height={200}
            alt="A picture of a roublabot invocation"
          />
          <section className="2xl:container 2xl:mx-auto">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-stretch items-stretch px-8">
              {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
              ))}
            </ul>
          </section>
        </main>

        <footer className="w-full flex justify-center">
          <a href="https://github.com/roublabot" target="blank">
            <div className="flex text-white mb-4 text-xl hover:text-neutral-400 hover:duration-150">
              <FontAwesomeIcon className="w-4 mr-1" icon={faGithub} />
              Roublabot
            </div>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
