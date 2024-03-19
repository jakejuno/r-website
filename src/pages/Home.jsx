import homeimage from "../assets/images/packmanimage.jpg"


export default function Home(){
    return(
        <div>
            <div className="homepage">
                <h1>HOME</h1>
            </div>
            <div className="homeimage">
                <img src={homeimage} alt="" />
            </div>
        </div>
    )
}