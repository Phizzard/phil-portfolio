import React from "react"
import { any } from "prop-types"
import styled from "@emotion/styled"
import tw from "../../tailwind"

const Card = ({ title, children, className, image }) => (
  <Container className={className}>
    {title && (
      <Header>
        <Title>{title}</Title>
      </Header>
    )}
    <Body>
      {image && <Image src={image} />}
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
  ${tw`p-4 flex relative`}
`
const Title = styled.h3`
  ${tw`m-0 p-2 rounded-tl-lg rounded-bl-lg `}
`

const Image = styled.img`
  ${tw`w-24 h-full m-0 p-1`}
`
const Content = styled.div`
  ${tw`p-1 w-full text-left`}
`

Card.propTypes = {
  children: any,
}

export default Card
