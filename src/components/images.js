import one from "../images/ones.jpeg"
import two from "../images/threes.jpeg"
import three from "../images/twos.jpeg"
function Images(){
    return(
      <div className="images">
    <div className="img">
      <img src={one} alt="" ></img>
      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, ipsam!</h3>
      </div>
    <div className="img">
      <img src={two}  alt="" ></img>
      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
    </div>
    <div className="img">
      <img src={three}  alt="" ></img>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
    </div>
      </div>
    )
  }
  export default Images
  