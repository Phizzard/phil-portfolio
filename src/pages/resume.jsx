import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Card from "../components/Card"
import IntroText from "../components/IntroText"
import lmg from "../images/lxmg.png"
import ffn from "../images/44n.png"
import omsg from "../images/omsg.png"
import reactIcon from "../images/react.png"
import nodeIcon from "../images/node.png"
import javascriptIcon from "../images/javascript.png"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <IntroText>
      A professional overview of my past employment, and skills I offer a level
      of expertise at.
    </IntroText>
    <SubTitle>Employment</SubTitle>
    <WorkCard title="Oct 2016 - Present" image={lmg} imageTop>
      <WorkCardTitle>LabX Media Group</WorkCardTitle>
      <WorkCardSubTitle>Full Stack Web Developer</WorkCardSubTitle>
      <WorkCardText>
        LabX Media Group (LMG) is a worldwide information and marketing company
        focused within the science community, with various brands underneath
        ranging from E-commerce, social platforms, and editorial systems. Mainly
        focused in the core brand LabX Marketplace, I started out maintaining
        the Labx Service Site. The Labx Service Site's stack involved Node,
        Express, JQuery, Pug, GRUNT, LESS, and MSSQL. I worked on implementing
        Google Maps API for locating service provider's locations from exact
        longitude - latitude to distance radius's and adding a review system
        from scratch using JQuery on the front end. My next main project was to
        undergo a big project of rebuilding the LabX Marketplace utilizing
        Magento 2 in a headless state and building a store front from scratch.
        The storefront's stack involved Node, Express, React, Pug, GULP, SASS.
        Though the project was not initially scoped to use Magento 2 in a
        headless state, after many difficulties getting the project moving from
        Magento's lacking frontend I was able to create a proof of concept
        outside of work hours and present the alternate route to progress on the
        project and provide a cleaner storefront experience.
      </WorkCardText>
    </WorkCard>
    <WorkCard title="Jan 2015 - Oct 2016" image={ffn} imageTop>
      <WorkCardTitle>Fourty Four North</WorkCardTitle>
      <WorkCardSubTitle>Jubior Web Developer</WorkCardSubTitle>
      <WorkCardText>
        Working as a Junior Web Developer at 44 North Digital Marketing my
        responsibilities include creating responsive, appealing, lead generating
        websites for our clients. Using in depth knowledge and understanding of
        WordPress's architecture with themes and plugins to fit custom needs for
        clients and integrating websites with applications such as Active
        Campaign and Zapier to create auto responding email services.
      </WorkCardText>
    </WorkCard>
    <WorkCard title="May 2015 - Sept 2015" image={omsg} imageTop>
      <WorkCardTitle>One More Story Games</WorkCardTitle>
      <WorkCardSubTitle>Junior Client Developer</WorkCardSubTitle>
      <WorkCardText>
        Working as a junior client programmer in my first non paid work term, I
        got the chance to work with some familiar technology and some
        unfamiliar. Utilizing a MYSQL database using PHP to talk to a flash
        built client running in an internet browser was all familiar despite the
        use of action script that is used for flash. Using existing knowledge of
        similar object orientated programming such as Java to learn quickly to
        perform tasks.
      </WorkCardText>
    </WorkCard>
    <SubTitle>Skills</SubTitle>
    <SkillCards>
      <SkillCard>
        <SkillImage src={reactIcon} />
        <SubTitle>React</SubTitle>
      </SkillCard>
      <SkillCard>
        <SkillImage src={nodeIcon} />
        <SubTitle>Node</SubTitle>
      </SkillCard>
      <SkillCard>
        <SkillImage src={javascriptIcon} />
        <SubTitle>Javascript</SubTitle>
      </SkillCard>
    </SkillCards>
  </Layout>
)
const WorkCard = styled(Card)`
  ${tw` font-sans mb-4`}
`

const WorkCardTitle = styled.h3`
  ${tw`mb-0 text-center sm:text-left `}
`

const WorkCardText = styled.p`
  ${tw`mb-2 text-center sm:text-left `}
`
const SubTitle = styled.h2`
  ${tw`text-center text-grey-dark font-light my-2 text-3xl`}
`
const WorkCardSubTitle = styled(SubTitle)`
  ${tw`sm:text-left text-2xl`}
`
const SkillCards = styled.div`
  ${tw`flex flex-wrap`}
  @media screen and (min-width: 576px) {
    justify-content: space-between;
  }
`

const SkillCard = styled(Card)`
  ${tw` font-sans mb-6`}
  @media screen and (min-width: 576px) {
    flex-basis: 48%;
  }
`
const SkillImage = styled.img`
  ${tw`px-12 mb-0`}
`
export default Resume
