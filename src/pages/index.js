import React from "react"
import Layout from "../components/layout"

//Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"

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
    <HomeContent></HomeContent>
    <HomeFeatured onCursor={onCursor}></HomeFeatured>
  </Layout>
}

export default IndexPage
