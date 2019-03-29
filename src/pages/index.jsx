import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import IntroText from "../components/IntroText"
import gatsbyIcon from "../images/gatsby-icon.png"
import reactIcon from "../images/react.png"
import reactJestIcon from "../images/react-jest.png"
import reduxIcon from "../images/redux.png"

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
    <SpotLightCard title="What's next?" image={reactJestIcon}>
      <SpotLightCardTitle>React + Jest</SpotLightCardTitle>
      <SpotLightCardText>
        I've used Jest for testing services and endpoints for API's, but i've
        yet to close the end to end loop with React + Jest + Enzyme. It's
        looking like it may be my next endeavour.
      </SpotLightCardText>
    </SpotLightCard>
    <SpotLightCard title="What's next?" image={reduxIcon}>
      <SpotLightCardTitle>Redux</SpotLightCardTitle>
      <SpotLightCardText>
        Redux is something I've not had much chance to dive into yet, learning
        and making react apps over the few years I've preferred a more pure
        react approach, especially when the updated context API was released,
        and now more recently the use of hooks.
      </SpotLightCardText>
      <SpotLightCardText>
        Soon I'm hoping to jump into the todo's of a react-redux app, and join
        the redux club... once i find the time ya'know.
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
