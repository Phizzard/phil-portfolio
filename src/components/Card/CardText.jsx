import React from "react"
import styled from "@emotion/styled"
import tw from "../../../tailwind"

const CardText = ({ children }) => <Text>{children}</Text>

export default CardText

const Text = styled.p`
  ${tw`mb-2 text-center font-sans sm:text-left `}
`
