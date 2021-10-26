import React from "react"
import { Link, PageProps } from "gatsby"
import Layout, { Footer, Hero } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"

import { ChevronCompactDown } from "@styled-icons/bootstrap"
import CamperSlideshowSection from "../components/CamperSlideshow"
import {
  TransparentLinkButton,
  IcterineLinkButton,
} from "../components/LinkButton"

const IndexPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    {/* Might need a minimum height. */}
    <Helmet title="HER CODE CAMP" />
    <Hero>
      <h1 className="mb-2 font-bold text-white uppercase text-7xl">
        Ready to hack the future?
      </h1>
      <p className="mb-4 text-xl text-white font-extralight font-body">
        Join a <span className="underline">free</span> computer science
        community for high school women and non-binary students in the Greater
        Toronto Area.
      </p>
      <div>
        <div>
          <Link className="mr-2" to="/register">
            <TransparentLinkButton>Register</TransparentLinkButton>
          </Link>
          <Link to="/get-involved">
            <TransparentLinkButton>Get Involved</TransparentLinkButton>
          </Link>
        </div>
      </div>
    </Hero>
    <section id="first-section">
      <div className="content-center grid-cols-2 gap-20 px-8 py-10 mx-auto max-w-7xl md:px-14 md:py-40 md:grid">
        <div className="mb-6 md:mb-0">
          <StaticImage
            className="shadow-icterine"
            src="../assets/participant-volunteer-smiling.jpg"
            alt="A camp participant and volunteer smiling while working through a problem together."
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="mb-2 font-mono text-3xl font-bold">
            print("HELLO WORLD")
          </h2>
          <p className="mb-4 text-xl font-light font-body">
            HER CODE CAMP is a non-profit organization that empowers
            under-represented communities in technology. We host free programs
            specifically targeted to high school students who identify as a
            woman, trans, and/or non-binary.
          </p>
          {/* TODO: Yellow border looks bad in this case */}
          <Link to="/about">
            <IcterineLinkButton>Learn More</IcterineLinkButton>
          </Link>
        </div>
      </div>
    </section>
    <section className="py-20 bg-icterine md:py-40">
      <div className="grid grid-cols-1 gap-16 px-20 mx-auto max-w-7xl md:grid-cols-3 md:gap-28 ">
        <div className="text-center">
          <p className="mb-8 text-6xl">💻</p>
          {/* <StaticImage alt="Emoji style image of a laptop." /> */}
          <h3 className="mb-4 text-xl font-bold uppercase">Workshops</h3>
          <p className="text-xl font-light font-body">
            We teach code and show the possibilities of technology.
          </p>
        </div>
        <div className="text-center">
          <p className="mb-8 text-6xl">👭</p>
          {/* <StaticImage alt="Emoji style image of two people holding hands." /> */}
          <h3 className="mb-4 text-xl font-bold uppercase">Mentorship</h3>
          <p className="text-xl font-light font-body">
            We help build cool projects alongside experts.
          </p>
        </div>
        <div className="text-center">
          <p className="mb-8 text-6xl">💖</p>
          {/* <StaticImage alt="Emoji style image of a heart." /> */}
          <h3 className="mb-4 text-xl font-bold uppercase">Community</h3>
          {/* NOTE: I changed anybody to everybody. */}
          <p className="text-xl font-light font-body">
            We create a space where everybody is welcome to learn.
          </p>
        </div>
      </div>
    </section>

    {/* TODO: not enough padding on new lines of the title. */}
    {/* TODO: I just went with dark grey. */}
    <section className="px-6 bg-gray-800 md:px-12">
      <div className="grid items-center grid-cols-1 gap-16 py-32 mx-auto md:grid-cols-3 max-w-7xl md:gap-12">
        {[
          {
            testimonial: `My daughter had an excellent experience at HER CODE CAMP. The
            content was very informative and staff was supportive and
            knowledgeable.`,
            name: "Kathryn Katsiroumpas",
            title: "Parent, Engineer",
          },
          {
            testimonial: `The gender gap I observe in my classroom is reflected within the technology sector, which is why I encouraged all my students who identify as female, transgender, or non-binary to participate in HER CODE CAMP.
          `,
            name: "Nathan Eusebio",
            title:
              "Math and Computer Science Teacher, Jarvis Collegiate Institute",
          },
          {
            testimonial: `The camp inspired me to further explore python through projects of my own, including an interactive calculator and a snake game.`,
            name: "Diksha",
            title: "HCC Alumni 2021",
          },
        ].map(({ testimonial, name, title }) => (
          <div key={name}>
            <span className="ml-[-11px] font-body italic font-black text-icterine text-9xl align-bottom select-none">
              “
            </span>
            <p className="sm:mt[-30px] mt-[-20px] font-mono font-extralight text-white text-lg mb-4">
              {testimonial}
            </p>
            {/* TODO: need to match font colours */}
            <span className="px-1 font-mono text-gray-800 bg-white text-md">
              {name}
            </span>
            <br />
            <span className="px-1 font-mono font-light text-gray-800 bg-white">
              {title}
            </span>
          </div>
        ))}
      </div>
    </section>
    <section
      className="px-10 py-20 bg-radial-gradient-c from-icterine to-white"
      // style={{
      //   backgroundImage:
      //     "radial-gradient(circle at 50% 50%, rgba(240,234,80,1) 0%, #FFFFFF 100%)",
      // }}
    >
      <div className="text-center">
        <h2 className="mb-4 font-mono text-3xl font-bold">Upcoming Programs</h2>
        <p className="mb-12 text-lg font-light font-body">
          For beginners with little to no coding experience. Oh, and they’re all
          free.
        </p>
        <div className="flex items-center justify-center">
          <div className="max-w-sm p-5 text-left bg-white border border-black font-body shadow-black">
            <div className="font-medium">
              Byte-sized: How to start a project
            </div>
            <div>December 1, 2021</div>
            <p className="font-light">
              Ever wanted to start coding, but don’t know where to begin?
            </p>
            <div className="mt-5 text-center">
              <Link to="/apply">
                <IcterineLinkButton>Apply Now</IcterineLinkButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-lg font-bold uppercase font--body text-iris">
          <Link to="/programs" className="hover:underline hover:text-black">
            More {">"}
          </Link>
        </div>
      </div>
    </section>
    <section>
      {/* TODO: need a max width here */}
      <div className="mx-auto ">
        <StaticImage
          src="../assets/all-participants.jpg"
          alt="Group photo of HER CODE CAMP participants and volunteers."
        />
      </div>
    </section>
    <CamperSlideshowSection />
    <section className="bg-icterine">
      <div className="max-w-5xl px-8 py-24 mx-auto md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20">
          <div className="px-10 pt-20 pb-12 text-center bg-white rounded shadow-xl">
            {/* <StaticImage alt="Emoji style image of woman using computer." /> */}
            <p className="mb-8 text-9xl">👩🏽‍💻</p>
            <h3 className="mb-4 text-xl font-bold uppercase">Learn</h3>
            <p className="mb-8 text-xl font-light font-body">
              Register for an upcoming program or start learning today at zero
              cost.
            </p>
            <Link to="/subscribe">
              <IcterineLinkButton>Register</IcterineLinkButton>
            </Link>
          </div>
          <div className="px-10 pt-20 pb-12 text-center bg-white rounded shadow-lg font-body">
            {/* <StaticImage alt="Emoji style image of woman using computer." /> */}
            <p className="mb-8 text-9xl">🤗</p>
            <h3 className="mb-4 text-xl font-bold uppercase font-body">
              Contribute
            </h3>
            <p className="mb-8 text-xl font-light font-body">
              Join the team as a volunteer, staff, partner, or advisor.
            </p>
            <Link to="/subscribe">
              <IcterineLinkButton>Get Involved</IcterineLinkButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <MailingListSection />
    <Footer />
  </Layout>
)

export const MailingListSection: React.FunctionComponent = () => (
  <section className="h-[700px] flex justify-center items-center bg-radial-gradient-br from-icterine to-iris">
    <div className="px-4 text-gray-200 md:w-2/5 md:bg-opacity-40 md:bg-white md:rounded-lg md:px-16 md:py-20 md:text-black">
      {/* <div className="relative w-1/3 py-20 bg-white bg-opacity-75 border border-gray-500 rounded-b-lg h-1/3"> */}

      {/* <div className="absolute top-0 left-0 text-lg font-bold">X</div> */}

      <div className="text-center my-30">
        <h2 className="mb-3 font-mono text-3xl font-bold">Stay in the loop!</h2>
        {/* NOTE: I changed from to stay in the loop in the body to keep up with */}
        <p className="mb-8 text-xl font-light font-body">
          Join our quarterly newsletter to keep up with news, volunteer
          opportunities, and upcoming events.
        </p>
        {/* TODO: */}
        <Link to="/subscribe">
          <IcterineLinkButton> Subscribe</IcterineLinkButton>
        </Link>
      </div>
    </div>
  </section>
)
export default IndexPage
