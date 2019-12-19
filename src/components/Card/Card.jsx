import React from "react"
import { any, string, shape, boolean, object } from "prop-types"
import styled from "@emotion/styled"
import tw from "../../../tailwind"
import GatsbyImage from "gatsby-image"

const Card = ({ title, children, className, image, contentCenter }) => (
  <Container className={className}>
    {title && (
      <Header>
        <Title>{title}</Title>
      </Header>
    )}
    <Body>
      {image && (
        <ImageWrapper imageTop={image.top}>
          {image.fluid ? (
            <StyledGatsbyImage fluid={image.fluid} />
          ) : (
            <Image src={image.src} />
          )}
        </ImageWrapper>
      )}
      <Content contentCenter={contentCenter}>{children}</Content>
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
  ${tw`max-w-xs max-h-xs m-0 w-full`}
`

const StyledGatsbyImage = styled(GatsbyImage)`
  ${tw`max-w-xs max-h-xs m-0 w-full mx-auto`}
`
const Content = styled.div`
  ${tw`p-2 w-full flex-1 ${props =>
    props.contentCenter ? "text-center" : "text-left"}`}
`
Card.defaultProps = {
  image: {
    top: false,
    src: "",
    fluid: {},
  },
}

Card.propTypes = {
  children: any,
  title: string,
  className: string,
  image: shape({
    top: boolean,
    src: string,
    fluid: object,
  }),
  contentCenter: boolean,
}

export default Card
