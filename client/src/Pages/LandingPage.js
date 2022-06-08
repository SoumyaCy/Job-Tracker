import { Logo } from "../components/Logo";
import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
export const LandingPage=()=>{
    return(
        <Wrapper>
        <nav>
       <Logo/>
        </nav>
        <div className="container page">
        <div className="info">
            <h1>Job <span>Tracking</span>  App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, nunc a fringilla vehicula, turpis orci aliquet ipsum, ac pharetra eros ex eu urna. Donec viverra facilisis ipsum sit amet fermentum. Pellentesque pretium nisl bibendum odio dapibus cursus. Vestibulum velit urna, pretium sed gravida vel, malesuada et urna. Etiam lorem elit, tristique ac eros in, finibus iaculis odio.</p>
            <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        
            <img src={main} alt="main" className="img main-img"/>
        
        </div>
        </Wrapper>
    )
}


