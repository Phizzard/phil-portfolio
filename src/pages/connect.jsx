import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import IntroText from "../components/IntroText"
import Card from "../components/Card"
import linkedInIcon from "../images/LinkedIn-logo.png"
import githubIcon from "../images/github.png"
import twitterIcon from "../images/twitter-icon.png"
import devIcon from "../images/dev.png"

const Connect = () => (
  <Layout>
    <SEO title="Connect" />
    <IntroText>I'm on the internet elsewhere too!</IntroText>
    <Socials>
      <SocialCard>
        <Image src={linkedInIcon} />
        <SubTitle>LinkedIn</SubTitle>
      </SocialCard>
      <SocialCard>
        <Image src={githubIcon} />
        <SubTitle>Github</SubTitle>
      </SocialCard>
      <SocialCard>
        <Image src={devIcon} />
        <SubTitle>Dev.to</SubTitle>
      </SocialCard>
      <SocialCard>
        <Image src={twitterIcon} />
        <SubTitle>Twitter</SubTitle>
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
  ${tw`text-center text-grey-dark font-light my-2 text-3xl`}
`

const Image = styled.img`
  ${tw`p-0 mb-0 w-full`}
`

export default Connect
