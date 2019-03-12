import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import tw from "./../../tailwind"

const Navbar = () => (
  <Container>
    <Item to="/about">
      <Text>About</Text>
    </Item>
    <Item to="/resume">
      <Text>Resume</Text>
    </Item>
    <Item to="/">
      <Text>Home</Text>
    </Item>
    <Item to="/projects">
      <Text>Projects</Text>
    </Item>
    <Item to="/connect">
      <Text>Connect</Text>
    </Item>
  </Container>
)

const Container = styled.nav`
  ${tw`fixed pin-b w-screen flex items-center justify-evenly bg-teal z-50`}
`
const Item = styled(Link)`
  ${tw`flex content-center justify-center p-4 text-white no-underline`}
`
const Text = styled.h4`
  ${tw`m-0 text-sm`}
`

export default Navbar
