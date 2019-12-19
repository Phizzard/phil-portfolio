import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "../components/Card"
import { IntroText } from "../components/Intro"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IntroText>
      Phil, thats me! This is my little corner on the internet where i show off
      things that I do.
    </IntroText>
    <SpotLightCard
      title="What's New?"
      image={{ fluid: data.podcastIconImage.childImageSharp.fluid }}
    >
      <SpotLightCardTitle>Friday Night Deploys</SpotLightCardTitle>
      <SpotLightCardText>
        My good friend Keith Brewster and I recently started a podcast called
        Friday Night Deploys. It might be best described as a
        personality-driven, web development-focused podcast show where we share
        our personal experiences with certain topics surrounding web
        development. Our hope is to provide some entertainment and share some
        thoughts on topics whether it's advice, stories, or asking our audience!
      </SpotLightCardText>
    </SpotLightCard>
    <SpotLightCard
      title="What's next?"
      image={{ fluid: data.gatsbyIconImage.childImageSharp.fluid }}
    >
      <SpotLightCardTitle>Gatsby Themes</SpotLightCardTitle>
      <SpotLightCardText>
        Gatsby is a serverless framework for building static sites. It can use
        data from almost any API or locally to build it's own data store in
        graphQL, and render it's views and components in React, all in a nice
        package thats rated 99 on PWA out the box. It's actually what this
        portfolio is built in! :)
      </SpotLightCardText>
      <SpotLightCardText>
        Gatsby Themes seems to be an evolution of their starters that allows
        some composition with other themes and being able to update to date with
        later versions.
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

export const query = graphql`
  query GatsbyIconQuery {
    gatsbyIconImage: file(relativePath: { eq: "gatsby-icon.png" }) {
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

export default IndexPage
