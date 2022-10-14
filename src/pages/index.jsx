import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { ChevronRightIcon } from '@/components/Card'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '../../images/dad.jpg'
import image2 from '../../images/beth.jpg'
import image3 from '../../images/birthday.jpeg'
import image4 from '../../images/creek.jpeg'
import image5 from '../../images/ropeaccess.jpeg'
import aspiro from '../../images/aspiro.png'
import planetGranite from '../../images/planetgranite.png'
import openBeta from '../../images/openbeta.png'
import ropePartner from '../../images/ropepartner.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import windVentory from '../../images/windventory.png'
import chatter from '../../images/chatter.png'
import soundClout from '../../images/soundclout.png'
import doggyDone from '../../images/doggy-done.jpeg'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Project({ project }) {
  return (
    <Card as="article">
      <Image
        src={project.logo}
        alt=""
        className="h-8 w-8 rounded-full"
        unoptimized
      />
      <Card.Title>
        {project.title}
      </Card.Title>
      <Card.Description>{project.description}</Card.Description>
      {project.slug && <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
        <a href={project.slug} target="_blank" rel='noopener noreferrer'>View Project</a>
        <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
      </div>}
      {project.slug2 &&
        <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
          <a href={project.slug2} target="_blank" rel='noopener noreferrer'>View Github</a>
          <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
        </div>}
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}



function Resume() {
  let resume = [
    {
      company: 'OpenBeta.io',
      title: 'Open Source Contributor',
      logo: openBeta,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Rope Partner',
      title: 'Blade Repair Technician',
      logo: ropePartner,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Planet Granite Sunnyvale',
      title: 'Supervisor/Retail Coordinator',
      logo: planetGranite,
      start: '2018',
      end: '2020',
    },
    {
      company: 'AspiroAdventure',
      title: 'Lead Guide',
      logo: aspiro,
      start: '2016',
      end: '2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7 rounded-full" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button variant="secondary" className="group mt-6 w-full">
        <a href="https://github.com/Downster/dontbdown.github.io/raw/main/images/ResumePSQLCR.pdf" locale={false} download className="flex">
          Download CV
        </a>
        <ArrowDownIcon className="flex h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const projects = [
    {
      title: "OpenBeta.io",
      description: 'OpenBeta is a new climbing platform, focused completely on empowering the community with open license climbing beta and open source tools. I have built the ticks feature, and do general maintainence/debugging to help out. OpenBeta is made with Next.js, MongoDB, ApolloGraphQL, Tailwind.css, and many other frameworks. **NOTE: THIS LINK WILL BRING YOU TO THE TESTING VERSION OF THE SITE, IF YOU FIND A BUG PLEASE REPORT IT TO ME',
      slug: "http://openbeta.io/?next=true",
      slug2: 'https://github.com/orgs/OpenBeta/teams/core-dev/repositories',
      logo: openBeta
    },
    {
      title: "FeatureBox",
      description: 'A practical approach to data structures and algoritihms. This application uses what I have learned from studying data structures and algorithims and applies it to real world features (ex: using a Trie cache to make a text autocomplete feature). Created with Next.js, Tailwind.css, AWS, PostgreSQL, Java, and Spring Boot',
      slug2: "http://github.com/downster/featurebox",
      logo: logoOpenShuttle
    },
    {
      title: "windVentory",
      description: 'Inventory tracking application created over a month, utilizing Javascript, Python, React.js, Flask, Redux, and Socket.io.',
      slug: 'http://windventory.herokuapp.com',
      slug2: "https://github.com/Downster/windVentory",
      logo: windVentory
    }
  ]
  return (
    <>
      <Head>
        <title>
          Brendan Downing - Software engineer, rock climber, and environmental advocate
        </title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, rock climber, and environmental advocate
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I am a fast learner, curious problem solver, and adventurous soul who loves learning new things of all shapes, sizes and mediums. The majority of my life has been spent working on
            small teams, where collaboration, growth, and communication are extremely important. In my free time, I am usually rock climbing or playing guitar. Click on the about tab to learn more about me!          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://instagram.com/badtraddad"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/downster"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/brendan-downing"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <Project key={project.slug} project={project} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
