import React from "react"
import tw from "../../tailwind"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/Seo"
import IntroText from "../components/IntroText"
import Card from "../components/Card"
import CardText from "../components/CardText"
import {
  GiGamepad,
  GiBeerStein,
  GiCoffeeMug,
  GiWeightLiftingDown,
} from "react-icons/gi"

const About = () => (
  <Layout>
    <SEO title="About" />
    <IntroText>
      I also happen to be a real live human! Here are some things on that.
    </IntroText>
    <Card title="Introduction">
      <CardText>
        Hey there, I'm Phil. I reside in Barrie Ontario with my partner, two
        toddlers, and two cats. We're a happy family, at least while my children
        still think im cool (not sure how long thats going to last). While I'm
        not spending time with them, I often enjoy playing video games, lifting
        weights at the gym, and drinking coffee and craft beers.
      </CardText>
    </Card>
    <Interests>
      <InterestCard>
        <GiGamepad />
      </InterestCard>
      <InterestCard>
        <GiBeerStein />
      </InterestCard>
      <InterestCard>
        <GiCoffeeMug />
      </InterestCard>
      <InterestCard contentCenter={true}>
        <GiWeightLiftingDown />
      </InterestCard>
    </Interests>
  </Layout>
)

const Interests = styled.div`
  ${tw`flex flex-row flex-wrap justify-between`}
`

const InterestCard = styled(Card)`
  font-size: 5rem;
  margin: 1rem 0;
  flex-basis: 100%;
  @media screen and (min-width: 576px) {
    flex-basis: 48%;
  }
  @media screen and (min-width: 920px) {
    flex-basis: 23%;
  }
  svg {
    margin: auto;
  }
`

export default About
