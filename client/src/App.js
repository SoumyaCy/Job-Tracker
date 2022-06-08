
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Dashboard, ErrorPage, LandingPage, RegisterPage } from "./Pages";





function App() {
  return (
    <div>
    <BrowserRouter>
    <nav>
      <Link to='/'>Dashboard</Link>
      <Link to='/landing'>landing</Link>
      <Link to='/register'>Register</Link>
    </nav>
      <Routes>
<Route path="/" element={<Dashboard/>}></Route>
<Route path="/register" element={<RegisterPage/>}></Route>
<Route path="/landing" element={<LandingPage/>}></Route>
<Route path="*" element={<ErrorPage/>}></Route>
   
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
