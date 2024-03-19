import rjimage from "../assets/images/RaJIcon.png"
import bbimage from "../assets/images/BBIcon.png"
import fimage from "../assets/images/Frog1.png"


export default function Projects(){
    return(
        <div>
            <div className="homepage">
                <h1>PROJECTS</h1>
            </div>
            <div className="imagecontainer">
                <div>
                <img src={rjimage} alt="" className="proimage" />
                </div>
                <div>
                <img src={bbimage} alt="" className="proimage" />
                </div>
                <div>
                <img src={fimage} alt="" className="proimage" />
                </div>
            </div>
            <div className="textcontainer">
            <div>
                <p>Games : Runny And Jumpy, Birdy Bird, Frogie.</p>
            </div>
            <div> 
              <p>Tecnologies : Unity Game Engine, Visual Studio and C# Programming Language.</p>
                
            </div>
            </div>
        </div>
    )
}