import React from "react"
import { any } from "prop-types"
import styled from "@emotion/styled"
import tw from "../../tailwind"

const Card = ({ title, children, className, image, imageTop }) => (
  <Container className={className}>
    {title && (
      <Header>
        <Title>{title}</Title>
      </Header>
    )}
    <Body>
      {image && (
        <ImageWrapper imageTop={imageTop}>
          <Image src={image} />
        </ImageWrapper>
      )}
      <Content>{children}</Content>
    </Body>
  </Container>
)

const Container = styled.div`
  ${tw`flex flex-col shadow-md hover:shadow-lg rounded-tl-lg rounded-lg overflow-hidden`}
  transition: ease .2s;
  &:hover {
    transform: translateY(-0.05rem);
  }
`

const Header = styled.div`
  ${tw`flex bg-teal text-white flex-1 rounded-tl-lg rounded-bl-lg rounded-br-full mr-32`}
`

const Body = styled.div`
  ${tw`p-4 flex relative flex-wrap`}
`
const Title = styled.h3`
  ${tw`m-0 p-2 rounded-tl-lg rounded-bl-lg `}
`
const ImageWrapper = styled.div`
  ${tw`m-0 p-1 flex-shrink text-center`}
  flex-basis: 100%;
  @media screen and (min-width: 576px) {
    ${tw`text-left`}
    flex-basis: ${props => (props.imageTop ? "100%" : "30%")}
  }
  @media screen and (min-width: 768px) {
    ${tw`text-left`}
    flex-basis: ${props => (props.imageTop ? "100%" : "20%")}
  }
`
const Image = styled.img`
  ${tw`max-w-xs max-h-xs m-0 w-full h-full`}
`
const Content = styled.div`
  ${tw`p-2 w-full text-left flex-1`}
`
Card.defaultProps = {
  imageTop: false,
}
Card.propTypes = {
  children: any,
}

export default Card
