import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardTitle, CardSubTitle, CardText } from "../components/Card"
import { IntroText } from "../components/Intro"

const Resume = ({ data }) => (
  <Layout>
    <SEO title="Resume" />
    <IntroText>
      A professional overview of my past employment, and skills I offer a level
      of expertise at.
    </IntroText>
    <SubTitle>Employment</SubTitle>
    <WorkCard
      title="Jun 2019 - Present"
      image={{ fluid: data.cbcIconImage.childImageSharp.fluid, top: true }}
    >
      <CardTitle>CBC Radio-Canada - Digital Products</CardTitle>
      <CardSubTitle>Senior Developer</CardSubTitle>
      <CardText>
        CBC Radio-Canada is the national broadcasting centre for Canada where I
        worked as a Senior Developer on the Web Platform team in the Digital
        Products department.
        <br />
        <br />
        As a member of the Web Platform team, Our initiative is to ensure
        scalability, maintainability, and performance on the web application
        powering the cbc.ca website and enable several other teams to contribute
        to the codebase smoothly. The CBC website is a single page application
        built with React and Redux and utilizes Node.JS with Express to handle
        server-side rendering.
      </CardText>
    </WorkCard>
    <WorkCard
      title="Oct 2016 - Jun 2019"
      image={{ fluid: data.lxmgIconImage.childImageSharp.fluid, top: true }}
    >
      <CardTitle>LabX Media Group</CardTitle>
      <CardSubTitle>Full Stack Web Developer</CardSubTitle>
      <CardText>
        LabX Media Group (LMG) is a worldwide information and marketing company
        focused within the science community, with various brands underneath
        ranging from E-commerce, social platforms, and editorial systems. Mainly
        focused in the core brand LabX Marketplace, I started out maintaining
        the Labx Service Site. The Labx Service Site's stack involved Node,
        Express, JQuery, Pug, GRUNT, LESS, and MSSQL. My next main project was
        to undergo the previous legacy project utilizing Magento 2 in a headless
        state and building a store front from scratch. The storefront's stack
        involved Node, Express, React, Pug, GULP, SASS. Though the project was
        not initially scoped to use Magento 2 in a headless state, after many
        difficulties getting the project moving from Magento's lacking frontend
        I was able to create a proof of concept and present the alternate route
        to progress on the project and provide a cleaner storefront experience.
      </CardText>
    </WorkCard>
    <WorkCard
      title="Jan 2016 - Oct 2016"
      image={{ fluid: data.ffnIconImage.childImageSharp.fluid, top: true }}
    >
      <CardTitle>Fourty Four North</CardTitle>
      <CardSubTitle>Jubior Web Developer</CardSubTitle>
      <CardText>
        Working as a Junior Web Developer at 44 North Digital Marketing my
        responsibilities include creating responsive, appealing, lead generating
        websites for our clients. Using in depth knowledge and understanding of
        WordPress's architecture with themes and plugins to fit custom needs for
        clients and integrating websites with applications such as Active
        Campaign and Zapier to create auto responding email services.
      </CardText>
    </WorkCard>
    <SubTitle>Contributed To</SubTitle>
    <SkillCards>
      <SkillCard
        image={{ fluid: data.gatsbyIconImage.childImageSharp.fluid, top: true }}
      >
        <SubTitle>Gatsby</SubTitle>
      </SkillCard>
      <SkillCard
        image={{
          fluid: data.mattermostIconImage.childImageSharp.fluid,
          top: true,
        }}
      >
        <SubTitle>MatterMost</SubTitle>
      </SkillCard>
    </SkillCards>
    <SubTitle>Skills</SubTitle>
    <SkillCards>
      <SkillCard
        image={{ fluid: data.reactIconImage.childImageSharp.fluid, top: true }}
      >
        <SubTitle>React</SubTitle>
      </SkillCard>
      <SkillCard
        image={{ fluid: data.reduxIconImage.childImageSharp.fluid, top: true }}
      >
        <SubTitle>Redux</SubTitle>
      </SkillCard>
      <SkillCard
        image={{ fluid: data.gatsbyIconImage.childImageSharp.fluid, top: true }}
      >
        <SubTitle>Gatsby</SubTitle>
      </SkillCard>
      <SkillCard
        image={{ fluid: data.nodeIconImage.childImageSharp.fluid, top: true }}
      >
        <SubTitle>Node</SubTitle>
      </SkillCard>
      <SkillCard
        image={{
          fluid: data.javascriptIconImage.childImageSharp.fluid,
          top: true,
        }}
      >
        <SubTitle>TypeScript</SubTitle>
      </SkillCard>
      <SkillCard
        image={{
          fluid: data.typescriptIconImage.childImageSharp.fluid,
          top: true,
        }}
      >
        <SubTitle>Javascript</SubTitle>
      </SkillCard>
      <SkillCard
        image={{ fluid: data.jestIconImage.childImageSharp.fluid, top: true }}
      >
        <SubTitle>Jest</SubTitle>
      </SkillCard>
      <SkillCard
        image={{ fluid: data.cssIconImage.childImageSharp.fluid, top: true }}
      >
        <SubTitle>CSS</SubTitle>
      </SkillCard>
      <SkillCard
        image={{ fluid: data.htmlIconImage.childImageSharp.fluid, top: true }}
      >
        <SubTitle>HTML</SubTitle>
      </SkillCard>
    </SkillCards>
    <SubTitle>Education</SubTitle>
    <WorkCard
      title="Sept 2014 - Aug 2016"
      image={{ fluid: data.georgianIconImage.childImageSharp.fluid, top: true }}
    >
      <CardTitle>Computer Programmer - 2 years</CardTitle>
      <CardSubTitle>Diploma</CardSubTitle>
    </WorkCard>
  </Layout>
)
const WorkCard = styled(Card)`
  ${tw` font-sans mb-4`}
`
const SubTitle = styled.h2`
  ${tw`text-center text-grey-dark font-light my-2 text-3xl`}
`

const SkillCards = styled.div`
  ${tw`flex flex-wrap`}
  @media screen and (min-width: 576px) {
    justify-content: space-between;
  }
`

const SkillCard = styled(Card)`
  ${tw` font-sans m-2 flex-grow`}
  flex-basis: 48%;
  @media screen and (min-width: 576px) {
    flex-basis: 30%;
  }
`

export const query = graphql`
  query ResumeQuery {
    cbcIconImage: file(relativePath: { eq: "cbc-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lxmgIconImage: file(relativePath: { eq: "lxmg.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffnIconImage: file(relativePath: { eq: "44n.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    omsgIconImage: file(relativePath: { eq: "omsg.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mattermostIconImage: file(relativePath: { eq: "mattermost-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    georgianIconImage: file(relativePath: { eq: "georgian-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactIconImage: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reduxIconImage: file(relativePath: { eq: "redux.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsbyIconImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    javascriptIconImage: file(relativePath: { eq: "javascript.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    typescriptIconImage: file(relativePath: { eq: "ts-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jestIconImage: file(relativePath: { eq: "jest.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cssIconImage: file(relativePath: { eq: "css-logo2.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    htmlIconImage: file(relativePath: { eq: "html-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodeIconImage: file(relativePath: { eq: "node.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Resume
