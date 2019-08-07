import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Card} from "../components/Card"
import {IntroText} from "../components/Intro"
import gatsbyIcon from "../images/gatsby-icon.png"
import reduxIcon from "../images/redux.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IntroText>
      Phil, thats me! This is my little corner on the internet where i show off
      things that I do.
    </IntroText>
    <SpotLightCard title="What's next?" image={gatsbyIcon}>
      <SpotLightCardTitle>Gatsby Themes</SpotLightCardTitle>
      <SpotLightCardText>
        Gatsby is a serverless framework for building static sites. It can use
        data from almost any API or locally to build it's own data store in
        graphQL, and render it's views and components in React, all in a nice
        package thats rated 99 on PWA out the box. It's actually what this
        portfolio is built in! :)
      </SpotLightCardText>
      <SpotLightCardText>
        Gatsby Themes seems to be an evolution of their starters that allows some
        composition with other themes and being able to update to date with later versions.
      </SpotLightCardText>
    </SpotLightCard>
    <SpotLightCard title="What's coming up?" image={reduxIcon}>
      <SpotLightCardTitle>Game Development</SpotLightCardTitle>
      <SpotLightCardText>
        This one is a little harder to define exactly. I've always been passionate about video games.
        I've been playing them since I can remember and still do if I can find the time, even when I'm
        not playing them I'm trying to keep up to date with news, reviews, and playthroughs.
        The Idea of making games as a hobby still excites me, so I would like to take a looksies whether it's in 
        Phaser, Unity, or Unreal Engine.
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
