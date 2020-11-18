import React from "react"
import Layout from "../components/layout"

//Components
import HomeBanner from "../components/homePage/HomeBanner"

//Context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType})
  }

  return <Layout>
    <HomeBanner onCursor={onCursor}></HomeBanner>
  </Layout>
}

export default IndexPage
