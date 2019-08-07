import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {IntroText} from "../components/Intro"
import {Card} from "../components/Card"
import {Button} from "../components/Button"
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
        <Button as={"a"} href="https://www.linkedin.com/in/philip-tietjen-3a746851/">View Profile</Button>
      </SocialCard>
      <SocialCard>
        <Image src={githubIcon} />
        <SubTitle>Github</SubTitle>
        <Button as={"a"} href="https://github.com/Phizzard">View Profile</Button>
      </SocialCard>
      <SocialCard>
        <Image src={devIcon} />
        <SubTitle>Dev.to</SubTitle>
        <Button as={"a"} href="https://dev.to/phizzard">View Profile</Button>
      </SocialCard>
      <SocialCard>
        <Image src={twitterIcon} />
        <SubTitle>Twitter</SubTitle>
        <Button as={"a"} href="https://twitter.com/Phizzard">View Profile</Button>
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

const Image = styled.img`
  ${tw`p-0 mb-0 w-full`}
`

export default Connect
