import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styled components
import { createGlobalStyle, ThemeProvider} from "styled-components"
import {normalize} from "styled-normalize"

//Components
import Header from "./header"
import Cursor from "./customCursor"

//Context
import { useGlobalStateContext } from '../context/globalContext'


const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    text-decoration: none;
    cursor: none;
  }

  html{
    box-sizing: border-box;
    -webkit-font-smoothing: antialised;
    font-size: 16px;
  }

  body{
    font-family: sans-serif;
    background: ${ props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }


`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: '#ea291e',
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: '#ea291e',
  }

  const { currentTheme } = useGlobalStateContext()

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Cursor />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
