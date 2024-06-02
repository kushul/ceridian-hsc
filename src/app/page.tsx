import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logomark-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import logoDayforce from '@/images/dayforce.svg'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
// import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

export const caseStudies: CaseStudy[] = [
  {
    title: 'Introduction to programming',
  },
  {
    title: 'Computer Fundamentals',
  },
  {
    title: 'DBMS',
  },
  {
    title: 'Data Structures and Algorithms',
  },
  {
    title: 'Object Oriented Design and Programming',
  },
  {
    title: 'Business Skills for IT Professionals',
  },
  {
    title: 'Design Thinking and Interactive System Design',
  },
  {
    title: 'Web and Mobile Application Development',
  },
  {
    title: 'Software Engineering(include software development lifecycle)',
  },
  {
    title: 'Enterprise Architecture and Systems',
  },
  {
    title: 'Introduction to Data Science',
  },
  {
    title: 'Software Testing',
  },
  {
    title: 'Machine Learning and Deep Learning',
  },
  {
    title: 'Design Patterns',
  },
  {
    title: 'Software Security',
  },
  {
    title: 'Entrepreneurship and Innovation',
  },
  {
    title: 'AI Applications',
  },
  {
    title: 'Software Project Management',
  },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-dayforce py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

export interface CaseStudy {
  title: string
}

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="A glimpse into the syllabus
        "
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key="/" className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-4 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href="/">
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={logoFamilyFund}
                      alt="svg"
                      width={36}
                      height={36}
                      unoptimized
                    />
                  </Link>
                </h3>

                <p className="mt-6 text-center font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Benefits"
        title="Proposed Model
        "
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Immediate Employment">
              after the successful completion of the Higher School Certificate
            </ListItem>
            <ListItem title="Earn an attractive stipend">
              at the start of your career
            </ListItem>
            <ListItem title="Study at your own pace">
              , complete your degree in less than 3 years and speed up your
              progression
            </ListItem>
            <ListItem title="Acquire on the job experiences">
              experiences as from Day 1
            </ListItem>
            <ListItem title="Coaching and mentoring">
              from recognized professionals from Day 1
            </ListItem>
            <ListItem title=" Exposure to international operations">
              with unique career opportunities and access to innovative
              technology
            </ListItem>
            <ListItem title="Exposure to diverse and multicultural">
              working environments with travel opportunities
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        title="A glimpse into the syllabus
        "
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          {caseStudies.map((caseStudy) => (
            <GridListItem
              key={caseStudy.title}
              title={caseStudy.title}
            ></GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-16 sm:mt-20 md:mt-28">
        <FadeIn className="max-w-3xl">
          <Image
            src={logoDayforce}
            alt="Dayforce"
            className="w-28 pb-8"
            unoptimized
          />
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Shortcut to Success for School Leavers
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>

      {/* <CaseStudies caseStudies={caseStudies} /> */}
      <Values />
      <ContactSection />

      <Testimonial className="mt-24 sm:mt-32 lg:mt-40">
        Having partnered with the University of Mauritius, Ceridian is offering
        a unique pathway to Mauritian Higher School Leavers who wish to
        kickstart their professional careers at the same time as they are
        embarking on their tertiary studies. By eliminating the financial burden
        placed on parents thanks to the Ceridian Scholarship, students can fully
        concentrate on their course, at their own pace, whilst acquiring paid
        on-the-job experience. At the end of the course, the graduates will be
        offered a job at Ceridian to advance their careers, making the Ceridian
        Bridge to Success a win-win formula for everyone involved.
      </Testimonial>

      <Services />

      {/* <Clients /> */}
    </>
  )
}
