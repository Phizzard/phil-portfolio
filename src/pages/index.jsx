import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "../../tailwind"
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import Card from "../components/Card"
import gatsbyIcon from "../images/gatsby-icon.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Image />
    <Title>Phil Tietjen</Title>
    <SubTitle>FullStack Web Developer</SubTitle>
    <HighLights>
      <HighLight>React</HighLight>
      <HighLight>Node</HighLight>
      <HighLight>JS</HighLight>
    </HighLights>
    <IntroText>
      Phil, thats me! This is my little corner on the internet where i show off
      things that I do.
    </IntroText>
    <SpotLightCard title="What's hot?" image={gatsbyIcon}>
      <h3>React Hooks</h3>
      <p>Whats going on</p>
    </SpotLightCard>
    <SpotLightCard title="What's new?" image={gatsbyIcon}>
      <h3>Gatsby</h3>
    </SpotLightCard>
  </Layout>
)

const Title = styled.h1`
  ${tw`text-center mb-1`}
`

const SubTitle = styled.h2`
  ${tw`text-center text-grey-dark font-light my-2`}
`

const IntroText = styled.p`
  ${tw`text-center font-sans`}
`
const HighLights = styled.div`
  ${tw`flex justify-center flex-wrap mb-2`}
`

const HighLight = styled.span`
  ${tw`bg-teal text-white py-1 px-3 mx-2 font-sans font-bold rounded-full`}
`

const SpotLightCard = styled(Card)`
  ${tw`mb-5`}
`

export default IndexPage
