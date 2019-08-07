import React from "react"
import styled from "@emotion/styled"
import tw from "../../../tailwind"

const CardTitle = ({ children }) => <Title>{children}</Title>

export default CardTitle

const Title = styled.h3`
  ${tw`mb-0 text-center sm:text-left `}
`
