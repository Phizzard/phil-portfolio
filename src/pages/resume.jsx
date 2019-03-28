import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import CardTitle from "../components/CardTitle"
import CardSubTitle from "../components/CardSubTitle"
import CardText from "../components/CardText"
import IntroText from "../components/IntroText"
import lmg from "../images/lxmg.png"
import ffn from "../images/44n.png"
import omsg from "../images/omsg.png"
import reactIcon from "../images/react.png"
import nodeIcon from "../images/node.png"
import javascriptIcon from "../images/javascript.png"
import cssIcon from "../images/css-logo2.png"
import htmlIcon from "../images/html-logo.png"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <IntroText>
      A professional overview of my past employment, and skills I offer a level
      of expertise at.
    </IntroText>
    <SubTitle>Employment</SubTitle>
    <WorkCard title="Oct 2016 - Present" image={lmg} imageTop>
      <CardTitle>LabX Media Group</CardTitle>
      <CardSubTitle>Full Stack Web Developer</CardSubTitle>
      <CardText>
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
      </CardText>
    </WorkCard>
    <WorkCard title="Jan 2015 - Oct 2016" image={ffn} imageTop>
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
    <WorkCard title="May 2015 - Sept 2015" image={omsg} imageTop>
      <CardTitle>One More Story Games</CardTitle>
      <CardSubTitle>Junior Client Developer</CardSubTitle>
      <CardText>
        Working as a junior client programmer in my first non paid work term, I
        got the chance to work with some familiar technology and some
        unfamiliar. Utilizing a MYSQL database using PHP to talk to a flash
        built client running in an internet browser was all familiar despite the
        use of action script that is used for flash. Using existing knowledge of
        similar object orientated programming such as Java to learn quickly to
        perform tasks.
      </CardText>
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
      <SkillCard>
        <SkillImage src={cssIcon} />
        <SubTitle>CSS</SubTitle>
      </SkillCard>
      <SkillCard>
        <SkillImage src={htmlIcon} />
        <SubTitle>HTML</SubTitle>
      </SkillCard>
    </SkillCards>
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
  ${tw` font-sans mb-6`}
  @media screen and (min-width: 576px) {
    flex-basis: 48%;
  }
`
const SkillImage = styled.img`
  ${tw`px-12 mb-0 w-full`}
`
export default Resume
