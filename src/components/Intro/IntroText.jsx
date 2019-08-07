import React from "react"
import styled from "@emotion/styled"
import tw from "../../../tailwind"

const IntroText = ({ children }) => <Text>{children}</Text>

export default IntroText

const Text = styled.p`
  ${tw`text-center leading-tight font-sans md:text-2xl lg:text-3xl md: mt-4 lg:my-12`}
`
