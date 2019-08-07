import React from "react"
import styled from "@emotion/styled"
import tw from "../../../tailwind"

const CardSubTitle = ({ children }) => <SubTitle>{children}</SubTitle>

export default CardSubTitle

const SubTitle = styled.h2`
  ${tw`text-center text-grey-dark font-light my-2 sm:text-left text-2xl`}
`
