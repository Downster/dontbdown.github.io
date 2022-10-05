import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children, imgSrc }) {
  return (
    <Card as="li">
      <div className='flex flex-row gap-4 items-center'>
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <img className="h-8 w-8 rounded-full" src={imgSrc} />
        </div>
        <Card.Title as="h3" href={href} className='flex '>
          {title}
        </Card.Title>
      </div>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Skills - Brendan Downing</title>
        <meta
          name="description"
          content="Technologies and frameworks I use"
        />
      </Head>
      <SimpleLayout
        title="Technologies and frameworks I use."
        intro="These are all the technologies and frameworks that I have experience with. This list is not comprehenive by any means, I love learning new things and am diving into new technologies regularly."
      >
        <div className="space-y-20">
          <ToolsSection title="Languages">
            <Tool title="Javascript" imgSrc={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'}>
              <div>While funky, I find javascript highly useful as a frontend language, mainly beacuse Next.js, React.js, and Redux utilize it.</div>
            </Tool>
            <Tool title="Java" imgSrc={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'}>
              <div>While clunky, I love the precision Java gives you as a developer. I love the built in datastructures that Java has to offer, the benefits that come with being a strongly typed language, its OOP nature, and the ease of creating a backend with Spring Boot. Java is one of my top choices as a backend language.</div>
            </Tool>
            <Tool title="Python" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"}>
              <div>While slithery(??????), I love the balance that Python strikes. It is efficient and succinct. It also has some very useful built in datastructures, and is very easy to start a backend when combined with flask.  </div>
            </Tool>
            <Tool title="GraphQL" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"}>
              <div>I love how succinct GrapQL is. It makes getting the information you need, very simple.</div>
            </Tool>
            <Tool title="HTML5" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}>
              <div>Tried and true and the only option for rendering websites. We're stuck with you HTML.</div>
            </Tool>
            <Tool title="CSS3" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}>
              <div>The bane of my existence, but oh so satisfying when it works.</div>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Databases">
            <Tool title="PostgreSQL" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}>
              <div>You can't really do anything without a database and PosgreSQL is tried and true. I love wrangling data with queries in SQL</div>
            </Tool>
            <Tool title="MongoDB" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"}>
              <div>MongoDB makes it easy to work with data, when you don't need the relationships of relational databases</div>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Frontend Tools/Frameworks">
            <Tool title="Tailwind.css" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"}>
              <div>Tailwind makes the madness of css a bit more manageable for me. I love this framework.</div>
            </Tool>
            <Tool title="React.js" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}>
              <div>React makes writing HTML fun. If you are wise, eventually you'll end up with a bunch of reuseable components, effectively streamlining your development process.</div>
            </Tool>
            <Tool title="Next.js" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"}>
              <div>Gotta love server side rendering with React, along with automatic page integration. Makes my life a lot easier.</div>
            </Tool>
            <Tool title="Redux" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"}>
              <div>My favorite state management tool, though I haven't used any others so I'm definately biased.</div>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Backend Tools/Frameworks">
            <Tool title="Spring" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"}>
              <div>Spring has been around for a long time, and while it is fairly complex I love how easy it is to get an app up and running with Spring Boot. I really enjoy working with this backend.</div>
            </Tool>
            <Tool title="Flask" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"}>
              <div>Less opinionatd than Spring Boot but pretty much just as easy to get a backend up and running. Flask is fun.</div>
            </Tool>
            <Tool title="Express.js" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}>
              <div>I really don't like express that much, it just feels overly complicated to me.</div>
            </Tool>


          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VSCode" imgSrc={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'}>
              <div>Pretty much the jack of all trades of interactive development enviornments. I love VS Code, especially when you make custom themes for it
              </div>
            </Tool>
            <Tool title="intelliJ" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"}>
              <div>
                I love how in-depth this IDE is. It is my top choice for developing Java based applications.
              </div>
            </Tool>
            <Tool title="Docker" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"}>
              <div>
                Who doesn't love containerizing software? It just makes everything so much easier.
              </div>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Cloud Services">
            <Tool title="Amazon Web Services" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"}>
              <div>
                My buddy Jeff made this cool service where you can host anything you want, give him more money, and ultimately help him acheive world domination.
              </div>
            </Tool>
            <Tool title="Heroku" imgSrc={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"}>
              <div>
                Love hosting things here, still love it even though they are making me pay now.
              </div>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Object Relational Mapping">
            <Tool title="SQLAlchemy" imgSrc={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg'}>
              <div>
                This ORM is truly ALCHEMY. I love so many features on this, especially how it pretty much eager loads everything.
              </div>
            </Tool>
            <Tool title="Hibernate" imgSrc={'https://design.jboss.org/hibernate/logo/final/hibernate_icon_darkbkg_256px.png'}>
              <div>
                I'm pretty new to Hibernate but so far I love the ease of use it provides.
              </div>
            </Tool>
            <Tool title="Sequelize" imgSrc={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg'}>
              <div>
                I know how to use this, but wasn't too impressed with it.
              </div>
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
