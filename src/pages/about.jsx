import React from "react"
import tw from "../../tailwind"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
        <CardText>
          I've been playing video games since I was a very young age, and is
          still a passtime that has stuck with me in adulthood, granted with
          much less time to spend with them. When i do find time, I'm generally
          a sucker for RPG's,action games or co-op games with my brothers.
        </CardText>
      </InterestCard>
      <InterestCard>
        <GiBeerStein />
        <CardText>
          As long as I've been drinking (Age will remain unspecified), I've
          always enjoyed a beer, however in more recent years I've grown into
          the craft beer scene. So far I've found that I like a good sour or a
          stout. I like other stuff like IPA's too, just generally not AS much.
        </CardText>
      </InterestCard>
      <InterestCard>
        <GiCoffeeMug />
        <CardText>
          Not much to say here. I like to drink coffee, I like the taste and it
          keeps me awake when I need to be.
        </CardText>
      </InterestCard>
      <InterestCard contentCenter={true}>
        <GiWeightLiftingDown />
        <CardText>
          Fitness is important to me, and weight lifting in general is fun to
          me. It's very rewarding and getting better at moving heavy objects
          tickles something in my brain i guess. Small children have made it
          harder to keep up, but it's something I always try to squeeze in to me
          schedule, especially while I have a desk job.
        </CardText>
      </InterestCard>
    </Interests>
  </Layout>
)

const Interests = styled.div`
  ${tw`flex flex-row flex-wrap justify-between`}
`

const InterestCard = styled(Card)`
  svg {
    font-size: 5rem;
  }
  margin: 1rem 0;
  flex-basis: 100%;
  @media screen and (min-width: 576px) {
    flex-basis: 48%;
  }
  @media screen and (min-width: 920px) {
    flex-basis: 48%;
  }
  svg {
    margin: auto;
  }
`

export default About
