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
    <WorkCard title="2016 - Present" image={lmg}>
      <WorkCardTitle>LabX Media Group</WorkCardTitle>
      <WorkCardText>Lorem Ipsum</WorkCardText>
    </WorkCard>
    <WorkCard title="2015- 2016" image={ffn}>
      <WorkCardTitle>LabX Media Group</WorkCardTitle>
      <WorkCardText>Lorem Ipsum</WorkCardText>
    </WorkCard>
    <WorkCard title="2015 - 2015" image={omsg}>
      <WorkCardTitle>LabX Media Group</WorkCardTitle>
      <WorkCardText>Lorem Ipsum</WorkCardText>
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
  ${tw`mb-2`}
`

const WorkCardText = styled.p`
  ${tw`mb-2`}
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
  ${tw`px-12 mb-0`}
`
export default Resume
