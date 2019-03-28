import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import Card from "../components/Card"
import IntroText from "../components/IntroText"
import gatsbyIcon from "../images/gatsby-icon.png"
import reactIcon from "../images/react.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IntroText>
      Phil, thats me! This is my little corner on the internet where i show off
      things that I do.
    </IntroText>
    <SpotLightCard title="What's hot?" image={reactIcon}>
      <SpotLightCardTitle>React Hooks</SpotLightCardTitle>
      <SpotLightCardText>
        React being my favourite thing to write applications in at this point,
        and hooks is a new API released that changes how react is written and
        offers cool stuff and even simplifies some patterns
      </SpotLightCardText>
    </SpotLightCard>
    <SpotLightCard title="What's new?" image={gatsbyIcon}>
      <SpotLightCardTitle>Gatsby</SpotLightCardTitle>
      <SpotLightCardText>
        Gatsby is a serverless framework for building static sites. It can use
        data from almost any API or locally to build it's own data store in
        graphQL, and render it's views and components in React, all in a nice
        package thats rated 99 on PWA out the box. It's actually what this
        portfolio is built in! :)
      </SpotLightCardText>
    </SpotLightCard>
  </Layout>
)

const SpotLightCard = styled(Card)`
  ${tw`mb-5`}
`

const SpotLightCardTitle = styled.h3`
  ${tw`mb-2`}
`

const SpotLightCardText = styled.p`
  ${tw`mb-2 font-sans font-light`}
`

export default IndexPage
