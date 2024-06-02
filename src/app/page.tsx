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
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Shortcut <br />
            to Success for <br /> School Leavers
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            A unique program to advanced your career alongside your tertiary education
          </p>
          <p className="mt-6 text-xl text-neutral-600">
            Secure your first job right after high school and embark on your degree journey at the same time
          </p>
        </FadeIn>
      </Container>

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
