import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroText from "../components/IntroText"
import Card from "../components/Card"
import CardText from "../components/CardText"
import Button from "../components/Button"

import gatsbyIcon from "../images/gatsby-icon.png"
import giantBombIcon from "../images/giantbomb.jpg"
import thunderCatsIcon from "../images/ThunderCats-logo.png"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <IntroText>
      Sometimes I either finish or come close to finishing a side project. Here
      are some I don't classify to be in my github graveyard.
    </IntroText>
    <ProjectCard image={giantBombIcon} title="Regular Bomb Shows (WIP)">
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
    <ProjectCard image={giantBombIcon} title="Smaller Bomb">
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
    <ProjectCard image={gatsbyIcon} title="Phil Tietjen Portfolio">
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
    <ProjectCard image={thunderCatsIcon} title="ThunderCats Full Page Theme">
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
const ButtonGroup = styled.div`
  ${tw`flex justify-center md:justify-start`}
`

const ProjectButton = styled(Button)`
  ${tw`m-2`}
  :first-of-type {
    margin-left: 0;
  }
`
export default Projects
