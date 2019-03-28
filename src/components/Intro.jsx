import React from "react"
import styled from "@emotion/styled"
import tw from "../../tailwind"
import Image from "./image"
import Navbar from "../components/Navbar"

const Intro = () => (
  <Container>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <TextWrapper>
      <Title>Phil Tietjen</Title>
      <SubTitle>FullStack Web Developer</SubTitle>
      <HighLights>
        <HighLight>React</HighLight>
        <HighLight>Node</HighLight>
        <HighLight>JS</HighLight>
      </HighLights>
      <Navbar />
    </TextWrapper>
  </Container>
)

export default Intro

const Container = styled.div`
  ${tw`lg:shadow-md lg:overflow-hidden lg:rounded-lg`}
  display: flex;
  flex-wrap: wrap;
  max-width: 1040px;
  margin: 0 auto;
`

const ImageWrapper = styled.div`
  flex-basis: 100%;
  @media screen and (min-width: 768px) {
    flex-basis: 30%;
  }
`

const TextWrapper = styled.div`
  ${tw`relative md:flex md:flex-col md:justify-center md:flex-grow`}
  flex-basis: 100%;
  @media screen and (min-width: 768px) {
    flex-basis: 60%;
  }
`

const Title = styled.h1`
  ${tw`text-center mb-1 text-5xl`}
`

const SubTitle = styled.h2`
  ${tw`text-center text-grey-dark font-light my-2 text-3xl`}
`
const HighLights = styled.div`
  ${tw`flex justify-center flex-wrap mb-2`}
`

const HighLight = styled.span`
  ${tw`bg-teal text-white py-1 px-3 mx-2 font-sans font-bold rounded-full`}
`
