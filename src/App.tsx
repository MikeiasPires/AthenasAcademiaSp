import React from "react"
import GlobalStyles from "./createGlobalStyle"
import Headerbar from "./Components/HeaderBar"
import CoverTitle from "./Components/CoverHead"
import ContentHistory from "./Components/ContentHistory"
import Passbar from "./Components/Pass"
import Endbar from "./Components/EndBar"

function App() {

  return (
    <>
    <Headerbar/>
    <CoverTitle/>
    <ContentHistory/>
    <Passbar/>
    <Endbar/>
    <GlobalStyles/>
   </>
  )
}

export default App
