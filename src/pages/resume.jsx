import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, href, cta }) {
  return (
    <Card as="article">
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description><ul>{description.map((ele) => <><li className='pt-2 pb-2'>{ele}</li><hr></hr></>)}</ul></Card.Description>
      <a href={href} target="_blank" rel='noopener noreferrer' className='relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500'>{cta}</a>
    </Card>
  )
}

export default function Speaking() {
  const openBeta = [
    "Implemented a sitemap.xml file generated by the website's pages, with Typescript and GraphQL increasing overall web traffic and website exposure through search engine optimization",
    "Crafted component leveraging React.js and Next.js that allows users to import their previously ticked climbs from another website (Mountain Project), increasing ease of use and access for our users",
    "Designed a full-stack feature with Apollo GraphQL, MongoDB, and React.js that allows users to mark a climb as completed or tried, and document information about their attempt",
    "Leveraged TDD principles and created test specs with Jest to test the ticks collection in MongoDB allowing for a streamlined development process as the application grows",
    "Focused on code readability and technical documentation when creating these features"
  ]

  const ropePartner = [
    'Purposefully took assignments for large/complicated blade repairs to expedite my learning/growth process as an emerging repair technician.',
    'Communicated effectively with team members, utilizing leadership and team-building skills, resulting in an efficient, and enjoyable team experience',
    'Achieved high quality in blade repairs while working remotely, as acknowledged thru positive feedback from both the blade services team and customers',
    'Increased site-wide technician productivity by 15% through the development and maintenance of a ground support inventory tracking application using Google Appsheet in conjunction with several spreadsheets.',
    'Worked on small 2 or 3 man teams for up to 8 weeks, requiring excellent interpersonal, teamwork, and communication skills.'
  ]
  const planetGranite = [
    'Recognized twice as a top performing employee in Quarterly staff meetings and consistently asked to take on out-of-scope tasks for management',
    'Rapidly promoted to Supervisor, and Retail Coordinator (8 months) and promoted to managing/ensuring prompt opening of the gym within 4 months',
    'Responsible for training and coaching new hires and new openers on proper customer etiquette as well as business policies and procedures'
  ]

  const aspiro = [
    'Responsible for effectively communicating in a non aggressive and empathic way with clients on a daily basis.',
    'Maintained team cohesion and efficiency in stressful situations by actively communicating with teammates and team leads.',
    'Established trust and respect with therapists and clients by consistently executing treatment plans with a high attention to detail.'
  ]
  return (
    <>
      <Head>
        <title>Resume - Brendan Downing</title>
        <meta
          name="description"
          content="I have worked on small collaborative teams most of my life."
        />
      </Head>
      <SimpleLayout
        title="I have worked on small, collaborative teams most of my life."
        intro="These experiences have given me great collaboration, teamwork, people skills and an ability to give and recieve feedback easily. I am a hard worker, and quick learner who feels at home when trying to figure out 
        a problem that I don't know the answer to. I have a proven track record of progressing in my roles and responsibilities at each company I have worked at and encompass a growth mindset in all that I do.
        "
      >
        <div className="space-y-20">
          <SpeakingSection title="OpenBeta.io">
            <Appearance
              href="https://openbeta.io/"
              title="Contributor - Open Source Project"
              description={openBeta}
              event="July 2022 - Current"
              cta="Website"
            />
          </SpeakingSection>
          <SpeakingSection title="Rope Partner">
            <Appearance
              href="https://www.ropepartner.com/"
              title="Blade Repair Technican"
              description={ropePartner}
              event="February 2020 - May 2022"
              cta="Website"
            />
          </SpeakingSection>
          <SpeakingSection title="Planet Granite Sunnyvale">
            <Appearance
              href="https://movementgyms.com/"
              title="Supervisor/Retail Coordinator/Opener"
              description={planetGranite}
              event="September 2018 - February 2020"
              cta="Website"
            />
          </SpeakingSection>
          <SpeakingSection title="Aspiro Adventure">
            <Appearance
              href="https://aspiroadventure.com/"
              title="Lead Guide"
              description={aspiro}
              event="March 2017 - August 2018"
              cta="Website"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
