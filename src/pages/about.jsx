import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '../../images/me.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="I’m Brendan Downing. I live in Reno, where I code my heart out."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Brendan Downing.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"> I live in Reno,
              where I code and climb my heart out.</h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>I am an avid rock climber who is passionate about social change, enviornmental consciousness, and ultimately making my actions make the world a better place.
                I love a challenge, whether that challenge takes the form of a long day in the mountains, route finding on an adventurous multi pitch climb, finding a way to get through
                to an extremely closed off client, or learning a new technology or framework. I am confident that I will not only find a way to solve the problem, but learn something about myself along the way
                and ultimately become a better person for it.
              </p>
              <p>I have worked in renewable energy as a blade repair technician, as a social worker, a wilderness therapy guide for at risk youth, and as a supervisor at a climbing gym. These experiences have given me excellent communication and teamwork skills which allow me to work effectively and efficiently with many types of people.
                My diverse skillset, coupled with my determination, communication skills, attention to detail and problem solving abilities will make me a great addition to your team.
                Lets build something great, and change the world. One line at a time.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="http://instagram.com/badtraddad" icon={InstagramIcon} className="mt-4">
                <div>Follow on Instagram</div>
              </SocialLink>
              <SocialLink href="http://github.com/downster" icon={GitHubIcon} className="mt-4">
                <div>Follow on GitHub</div>
              </SocialLink>
              <SocialLink href="http://linkedin.com/in/brendan-downing" icon={LinkedInIcon} className="mt-4">
                <div>Follow on LinkedIn</div>
              </SocialLink>
              <SocialLink
                href="mailto:b.downing.code@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                <div>b.downing.code@gmail.com</div>
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
