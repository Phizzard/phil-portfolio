import React from "react"
import { any } from "prop-types"
import styled from "@emotion/styled"
import tw from "../../tailwind"

const Card = ({ children }) => (
  <Container>
    <Body>{children}</Body>
  </Container>
)

const Container = styled.div`
  ${tw`flex shadow`}
`

const Body = styled.div`
  ${tw`p-4`}
`

Card.propTypes = {
  children: any,
}

export default Card
