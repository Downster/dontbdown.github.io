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
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description><ul>{description.map((ele) => <><li>{ele}</li><hr></hr></>)}</ul></Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  const ropePartner = [
    'Purposefully took assignments for large/complicated blade repairs to expedite my learning/growth process as an emerging repair technician.',
    'Communicated effectively with team members, utilizing leadership and team-building skills, resulting in an efficient, and enjoyable team experience',
    'Achieved high quality in blade repairs while working remotely, as acknowledged thru positive feedback from both the blade services team and customers',
    'Increased site-wide technician productivity by 15% through the development and maintenance of a ground support inventory tracking application using Google Appsheet in conjunction with several spreadsheets.',
    'Worked on small 2 or 3 man teams for up to 8 weeks, requiring excellent interpersonal, teamwork, and communication skills.'
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
        intro=""
      >
        <div className="space-y-20">
          <SpeakingSection title="OpenBeta.io">
            <Appearance
              href="#"
              title="Contributor - Open Source Project"
              description={ropePartner}
              event="Julyy 2022 - Current"
              cta="Website"
            />
          </SpeakingSection>
          <SpeakingSection title="Rope Partner">
            <Appearance
              href="#"
              title="Blade Repair Technican"
              description={ropePartner}
              event="February 2020 - May 2022"
              cta="Website"
            />
          </SpeakingSection>
          <SpeakingSection title="Planet Granite Sunnyvale">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description={ropePartner}
              event="Encoding Design, July 2022"
              cta="Website"
            />
          </SpeakingSection>
          <SpeakingSection title="Aspiro Adventure">
            <Appearance
              href="#"
              title="Lead Guide"
              description={ropePartner}
              event="February 2020 - May 2022"
              cta="Website"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
