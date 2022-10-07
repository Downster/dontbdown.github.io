import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import windVentory from '../../images/windventory.png'
import logoCosmos from '@/images/logos/cosmos.svg'
import chatter from '../../images/chatter.png'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import openBeta from '../../images/openbeta.png'
import soundClout from '../../images/soundclout.png'
import doggyDone from '../../images/doggy-done.jpeg'
import Link from 'next/link'

const projects = [
  {
    name: 'OpenBeta.io',
    description: 'OpenBeta is a new climbing platform, focused completely on empowering the community with open license climbing beta and open source tools. I have built the ticks feature, and do general maintainence/debugging to help out. OpenBeta is made with Next.js, MongoDB, ApolloGraphQL, Tailwind.css, and many other frameworks.',

    liveLink: { href: 'http://openbeta.io?next=true', label: 'OpenBeta.io' },
    gitHubLink: { href: 'https://github.com/OpenBeta', label: 'OpenBeta on Github' },
    logo: openBeta,
  },
  {
    name: 'FeatureBox',
    description:
      'A practical approach to data structures and algoritihms. This application uses what I have learned from studying data structures and algorithims and applies it to real world features (ex: using a Trie cache to make a text autocomplete feature). Created with Next.js, Tailwind.css, AWS, PostgreSQL, Java, and Spring Boot',
    liveLink: { href: 'https://github.com/Downster/FeatureBox', label: 'FeatureBox - in progress' },
    gitHubLink: { href: 'https://github.com/Downster/FeatureBox', label: 'FeatureBox on Github' },
    logo: logoOpenShuttle,
  },
  {
    name: 'windVentory',
    description:
      'Inventory tracking application created over a month, utilizing Javascript, Python, React.js, Flask, Redux, and Socket.io.',
    liveLink: { href: 'http://windVentory.herokuapp.com', label: 'windVentory' },
    gitHubLink: { href: 'https://github.com/Downster/windVentory', label: 'windVentory on Github' },
    logo: windVentory,
  },
  {
    name: 'Chatter',
    description:
      'Chatter is a full-stack web application clone of slack.com. Chatter allows users create and join channels, interact with other users via a live chat, and send direct messages to other users or groups of users. Chatter was developed utilizing React.js, Redux, PostgreSQL, Flask, Socket.io, AWS, and many other technologies',
    liveLink: { href: 'https://chatter-with-us.herokuapp.com', label: 'Chatter' },
    gitHubLink: { href: 'https://github.com/celestewinterton/chatter', label: 'Chatter on Github' },
    logo: chatter,
  },
  {
    name: 'SoundClout',
    description:
      'SoundClout is a pixel perfect Soundcloud clone. Users can upload and comment on songs, aswell as view the songs as a waveform and leave comments at specific times during the song. Soundclout was built with Express.js, AWS S3, React.js, Redux, Wavesurfer.js, Howler.js, etc...',
    liveLink: { href: 'http://soundclout-app.herokuapp.com', label: 'SoundClout' },
    gitHubLink: { href: 'https://github.com/OpenBeta', label: 'OpenBeta on Github' },
    logo: soundClout,
  },
  {
    name: 'DoggyDone',
    description:
      'Doggy Done is a "smart to-do app" for dog owners, that organizes user tasks, and allows for interactivity on tasks between users. It is inspired by Remember the Milk. Doggy Done is a single page application built with purely vanllia javascript and Pug.js, with an Express.js backend',
    liveLink: { href: 'http://doggy-done.herokuapp.com', label: 'Doggy Done' },
    gitHubLink: { href: '', label: 'OpenBeta on Github' },
    logo: doggyDone,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Brendan Downing</title>
        <meta
          name="description"
          content="Things I’ve made trying to make my mark on the world."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to make my mark on the world."
        intro="I've been pretty busy over the past year and a half, here are some of the projects that I am most proud of."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                <a href={project.liveLink.href} target="_blank" rel='noopener noreferrer' className="relative z-10">{project.name}</a>
              </h2>
              <Card.Description>{project.description}</Card.Description>

              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <a href={project.liveLink.href} target="_blank" rel='noopener noreferrer' className="ml-2">{project.liveLink.label}</a>

                {/* <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">
                  <Link
                    href={project.gitHubLink.href}
                    className="z-20"
                  >
                    {project.gitHubLink.label}
                  </Link>
                </span> */}
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
