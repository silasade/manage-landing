import First from "./First"
import Second from "./Second"
import Comments from "./Comments"
import Simplify from "./Simplify"
import Footer from "./Footer"
function Home(){
    return(
        <div className="main">
            <div className="App main">
            <First/>
            <Second/>
            <Comments/>
            </div>
            <div>
            <Simplify/>
            <Footer/>
            </div>
        </div>
    )
}
export default Home