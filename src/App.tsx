
import GlobalStyles from "./createGlobalStyle"
import Headerbar from "./Components/HeaderBar"
import CoverTitle from "./Components/CoverHead"
import ContentHistory from './Components/ContentHistory/ContentHistory'
import Passbar from "./Components/Pass"
import Endbar from "./Components/EndBar"
import Mainpackage from "./Components/Main/Index"

function App() {

  return (
    <>
    
    <Headerbar/>
    <CoverTitle/>
    <ContentHistory/>
    <Mainpackage/>
    <Passbar/>
    <Endbar/>
    <GlobalStyles/>
   </>
  )
}

export default App
