/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "../../tailwind"

import {Intro} from "./Intro"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Intro />
        <MainWrapper>
          <Main>{children}</Main>
          <Footer>
            © {new Date().getFullYear()} Philip Tietjen, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </MainWrapper>
      </>
    )}
  />
)
const MainWrapper = styled.div`
  ${tw`mx-auto my-0 sm:px-4 pt-0 pb-8`}
  max-width: 1060px;
`

const Main = styled.main`
  ${tw`text-center pb-5`}
`

const Footer = styled.footer`
  ${tw`font-sans`}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
