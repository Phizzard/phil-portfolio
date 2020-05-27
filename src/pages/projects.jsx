import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { IntroText } from "../components/Intro"
import { Card, CardText, CardTitle } from "../components/Card"
import { Button } from "../components/Button"

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <IntroText>A closer look into some stuff I've done</IntroText>
    <ProjectCard
      image={{ fluid: data.cbcIconImage.childImageSharp.fluid }}
      title="React UI Library - CBC Innovation Sprint 2019"
    >
      <CardText>
        As a part of CBC's annual 2 week innovation sprint, I pitched for a
        project to build an in house React UI Library that would aim for
        friendly component API's, theming, and small bundle sizes. I took a
        leadership role with a team of 5 to collaborate together and build the
        foundation of the project.
        <br />
        <br />
        <DetailTitle>Project Highlights</DetailTitle>
        <ul>
          <li>TypeScript - Strong typing with props</li>
          <li>Style Guidist - Self documentation from Types and JSDocs</li>
          <li>Emotion - Theming and styling</li>
          <li>
            Single Theme Config - Source of truth for pallete, sizes, spaces,
            etc
          </li>
          <li>Small Bundle Size - appoximating at 8kb</li>
        </ul>
      </CardText>
    </ProjectCard>
    <ProjectCard
      image={{ fluid: data.podcastIconImage.childImageSharp.fluid }}
      title="Devplebs"
    >
      <CardText>
        When my close friend of mine and I decided to wonder into the world of
        podcasting, we wanted a website to help out with some web presence. So
        we decided to build a small website for some of our content. We built
        the website using GatsbyJS, TailwindCSS, and Emotion/styled. The site
        also consumes data from our podcast hosting at PodBean using their API
        and loads it into Gatsby's GraphQL data layer on build time.
      </CardText>
      <ButtonGroup>
        <ProjectButton as="a" href="https://www.devplebs.tech/" target="_blank">
          View Project
        </ProjectButton>
      </ButtonGroup>
    </ProjectCard>
    <ProjectCard
      image={{ fluid: data.devIconImage.childImageSharp.fluid }}
      title="Let's Take a Look At CSS in JS with React - 2019 Series"
    >
      <CardText>
        A three part series of blog posts published to dev of me going through
        various methods of CSS in JS in React, along with my personal takes on
        them. I went through with inline styling, ReactJSS, and Styled
        Components. I had a great time writing these posts and the engagements
        that came with it!
      </CardText>
      <ButtonGroup>
        <ProjectButton
          as="a"
          href="https://dev.to/phizzard/let-s-take-a-look-at-css-in-js-with-react-in-2019-css-inline-styling-jcg"
          target="_blank"
        >
          View Posts
        </ProjectButton>
      </ButtonGroup>
    </ProjectCard>
    <ProjectCard
      image={{ fluid: data.giantBombIconImage.childImageSharp.fluid }}
      title="Gatsby Bomb PWA"
    >
      <CardText>
        That's right, I have 2 different projects using Giantbomb's API. I'm a
        fan of the site, and wanted to expand on my mirco app. Regular Bomb
        Shows is a PWA powered by GatsbyJS. It's a serverless netflix-like app
        using the Giant Bomb API as a source of data. This Gatsby App uses
        React, Emotion Styled, and GraphQL. The Giantbomb website underwent a
        redesign, implementing a Show / Season / Episode like structure to their
        content. As a fan of the site and as a developer, I really liked their
        redesign and was inspired to see what I could make with this new video
        structure and their API.
      </CardText>
      <ButtonGroup>
        <ProjectButton
          as="a"
          href="https://github.com/Phizzard/gatsby-bomb"
          target="_blank"
        >
          View Code
        </ProjectButton>
        <ProjectButton
          as="a"
          href="https://gatsbybomb.netlify.com/"
          target="_blank"
        >
          View Project
        </ProjectButton>
      </ButtonGroup>
    </ProjectCard>
    <ProjectCard
      image={{ fluid: data.giantBombIconImage.childImageSharp.fluid }}
      title="Smaller Bomb"
    >
      <CardText>
        Smaller Bomb is a single page application made with Node, React, and
        Flex box, using the Giant Bomb API to search for videos and render their
        embedded video player. I have been a fan of the site for a long time and
        decided to play with their API.
      </CardText>
      <ButtonGroup>
        <ProjectButton
          as="a"
          href="https://github.com/Phizzard/smaller-bomb"
          target="_blank"
        >
          View Code
        </ProjectButton>
        <ProjectButton
          as="a"
          href="https://smaller-bomb.herokuapp.com/"
          target="_blank"
        >
          View Project
        </ProjectButton>
      </ButtonGroup>
    </ProjectCard>
    <ProjectCard
      image={{ fluid: data.gatsbyIconImage.childImageSharp.fluid }}
      title="Phil Tietjen Portfolio"
    >
      <CardText>
        Yes I'm using my own portfolio site that you're currently on as a
        project and you can't stop me. This was something I would start to make,
        and scrap it from being either too ambitious, or not quite finding the
        right implementation of a CMS. I then finally found a good compromise!
      </CardText>
      <ButtonGroup>
        <ProjectButton
          as="a"
          href="https://github.com/Phizzard/phil-portfolio"
          target="_blank"
        >
          View Code
        </ProjectButton>
      </ButtonGroup>
    </ProjectCard>
    <ProjectCard
      image={{ fluid: data.thunderCatsIconImage.childImageSharp.fluid }}
      title="ThunderCats Full Page Theme"
    >
      <CardText>
        This is admitedly, pretty dumb. When i first found out about netlify's
        manual drag n drop deploys, I made a bunch of dumb web pages to send to
        people for giggles. This is one of them.
      </CardText>
      <CardText>
        WARNING: This is an autoplaying fullscreen video with audio, it also
        doesn't work on mobile :(. There's also a change that the internet hates
        my fun and this might not work at all!
      </CardText>
      <ButtonGroup>
        <ProjectButton
          as="a"
          href="https://thundercats.netlify.com/"
          target="_blank"
        >
          View Project
        </ProjectButton>
      </ButtonGroup>
    </ProjectCard>
  </Layout>
)

const ProjectCard = styled(Card)`
  ${tw`mb-8`}
  img {
    border-radius: 100%;
  }
`
const DetailTitle = styled(CardTitle)`
  ${tw`text-left pb-4`}
`
const ButtonGroup = styled.div`
  ${tw`flex justify-center md:justify-start`}
`

const ProjectButton = styled(Button)`
  ${tw`m-2`} :first-of-type {
    margin-left: 0;
  }
`

export const query = graphql`
  query ProjectsIconsQuery {
    gatsbyIconImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thunderCatsIconImage: file(relativePath: { eq: "ThunderCats-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    giantBombIconImage: file(relativePath: { eq: "giantbomb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    devIconImage: file(relativePath: { eq: "dev.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cbcIconImage: file(relativePath: { eq: "cbc-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    podcastIconImage: file(relativePath: { eq: "fridaynightdeploys.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Projects
