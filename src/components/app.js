import Navbar from "./navbar"
import Contact from "./contact"
import Images from "./images"
import Searchbox from "./searchbox"
import Aboutus from "./about"




function App(){

    return(
        <div>
  <Navbar></Navbar>
  <Searchbox></Searchbox>
  <Images></Images>
  <Aboutus></Aboutus>
  <Contact></Contact>
  </div>
    )
}
export default App