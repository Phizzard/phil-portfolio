import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { IntroText } from "../components/Intro"
import { Card } from "../components/Card"
import { Button } from "../components/Button"

const Connect = ({ data }) => (
  <Layout>
    <SEO title="Connect" />
    <IntroText>I'm on the internet elsewhere too!</IntroText>
    <Socials>
      <SocialCard
        image={{ fluid: data.linkedInIconImage.childImageSharp.fluid }}
      >
        <SubTitle>LinkedIn</SubTitle>
        <Button
          as={"a"}
          href="https://www.linkedin.com/in/philip-tietjen-3a746851/"
        >
          View Profile
        </Button>
      </SocialCard>
      <SocialCard image={{ fluid: data.githubIconImage.childImageSharp.fluid }}>
        <SubTitle>Github</SubTitle>
        <Button as={"a"} href="https://github.com/Phizzard">
          View Profile
        </Button>
      </SocialCard>
      <SocialCard image={{ fluid: data.devIconImage.childImageSharp.fluid }}>
        <SubTitle>Dev.to</SubTitle>
        <Button as={"a"} href="https://dev.to/phizzard">
          View Profile
        </Button>
      </SocialCard>
      <SocialCard
        image={{ fluid: data.twitterIconImage.childImageSharp.fluid }}
      >
        <SubTitle>Twitter</SubTitle>
        <Button as={"a"} href="https://twitter.com/Phizzard">
          View Profile
        </Button>
      </SocialCard>
    </Socials>
  </Layout>
)
const Socials = styled.div`
  ${tw`flex flex-row flex-wrap justify-between`}
`

const SocialCard = styled(Card)`
  flex-basis: 100%;
  margin: 1.5rem 0;
  @media screen and (min-width: 576px) {
    flex-basis: 48%;
  }
  @media screen and (min-width: 920px) {
    flex-basis: 23%;
  }
`
const SubTitle = styled.h2`
  ${tw`text-center text-grey-dark font-light my-6 text-3xl`}
`

export const query = graphql`
  query ConnectIconsQuery {
    linkedInIconImage: file(relativePath: { eq: "LinkedIn-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    githubIconImage: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    devIconImage: file(relativePath: { eq: "dev.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    twitterIconImage: file(relativePath: { eq: "twitter-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Connect
