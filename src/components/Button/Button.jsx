import React from "react"
import tw from "../../../tailwind"
import styled from "@emotion/styled"

const Button = ({ children, ...attrs }) => {
  //const isAnchor = href ? true : false;

  return <Container {...attrs}>{children}</Container>
}

export default Button

const Container = styled.button`
  ${tw`bg-teal border-teal border-solid border-1 text-white rounded-full font-sans px-4 py-2 font-bold no-underline hover:bg-white hover:text-teal`}
  transition: ease-in-out .15s;
`
