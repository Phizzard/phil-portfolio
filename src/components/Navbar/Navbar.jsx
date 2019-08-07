import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import tw from "../../../tailwind"
import {
  MdHome,
  MdAccountCircle,
  MdSchool,
  MdCode,
  MdQuestionAnswer,
} from "react-icons/md"

const Navbar = () => (
  <Container>
    <Item to="/">
      <MdHome />
      <Text>Home</Text>
    </Item>
    <Item to="/about">
      <MdAccountCircle />
      <Text>About</Text>
    </Item>
    <Item to="/resume">
      <MdSchool />
      <Text>Resume</Text>
    </Item>
    <Item to="/projects">
      <MdCode />
      <Text>Projects</Text>
    </Item>
    <Item to="/connect">
      <MdQuestionAnswer />
      <Text>Connect</Text>
    </Item>
  </Container>
)

const Container = styled.nav`
  ${tw`md:absolute md:w-full fixed pin-b w-screen flex items-center justify-around bg-teal z-50`}
`
const Item = styled(Link)`
  ${tw`flex flex-col content-center align-center items-center justify-center p-1 text-white no-underline flex-1`}
  & svg {
    font-size: 2.5rem;
  }
`
const Text = styled.h4`
  ${tw`m-0 text-sm`}
`

export default Navbar
