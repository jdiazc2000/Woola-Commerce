import './styles/styles-nav.scss';
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Catalogo from "./pages/catalogo";
import Page404 from "./pages/Page404"
import APIFail from "./pages/APIFail"

import {BrowserRouter  as Router, Route, Routes} from "react-router-dom";


const App = () => (
 <>
 <Router>
    <Routes>
          <Route exact path="/apifail" element={<APIFail/>}/>
          <Route exact path="/catalogo" element={<Catalogo/>}/>
          <Route exact path="/aboutus" element={<Aboutus/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="*" element={<Page404/>}/>
    </Routes>
</Router>
  </>
)

export default App;
