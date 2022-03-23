import './styles/styles-nav.scss';
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom";


const openMenu = () => {
  const navmenu = document.querySelector(".nav-menu");
  navmenu.classList.toggle("nav-menu_visible");
  if (navmenu.classList.contains("nav-menu_visible")) {
         document.querySelector('body').style.overflowY = 'hidden'
  } else {
         document.querySelector('body').style.overflowY = 'scroll'
  } 
}

const CloseMenu=() => {
    document.querySelector(".nav-menu").className = "nav-menu";
    document.querySelector('body').style.overflowY = 'scroll';
}


const App = () => (
 
 <>
 <Router>
    <header id="header">
      <nav  className="nav">
          <h1><span> WOOLA </span> COMMERCE</h1> <label onClick={openMenu} className="nav-toogle" title="menu">  <i className="fa fa-solid fa-caret-down"></i>  </label>
          <ul className="nav-menu">
              <li className="nav-menu-item"><NavLink className="nav-link" to="/" onClick={CloseMenu} exact="true">Inicio</NavLink></li>
              <li className="nav-menu-item"><NavLink className="nav-link" to="/aboutus" onClick={CloseMenu} exact="true">Sobre nosotros</NavLink></li>
              <li className="nav-menu-item"><NavLink className="nav-link" to="/" onClick={CloseMenu} exact="true">Catálogo</NavLink></li>
          </ul>
      </nav>
  </header>
    <Routes>
          <Route path="/catalogue" element={<catalogo/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/" element={<Home/>}/>
    </Routes>
</Router>
  </>
)

export default App;
