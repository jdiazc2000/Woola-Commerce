import './styles/styles-nav.scss';
import Home from "./pages/home";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const openMenu = () => {
    document.querySelector(".nav-toogle").addEventListener("click", openmenuUP)
}

const openmenuUP = () =>{
const navmenu = document.querySelector(".nav-menu");

    navmenu.classList.toggle("nav-menu_visible");
  if (navmenu.classList.contains("nav-menu_visible")) {
         document.querySelector('body').style.overflowY = 'hidden'
  } else {
         document.querySelector('body').style.overflowY = 'scroll'
  }
}


const App = () => (
 
 <>
 <Router>
    <header id="header">
      <nav  className="nav">
          <h1><span> WOOLA </span> COMMERCE</h1> <label onClick={openMenu} className="nav-toogle" title="menu">  <i className="fa fa-solid fa-caret-down"></i>  </label>
          <ul className="nav-menu">
              <li className="nav-menu-item"><a className="nav-link" href="/">Inicio</a></li>
              <li className="nav-menu-item"><a className="nav-link" href="/">Sobre nosotros</a></li>
              <li className="nav-menu-item"><a className="nav-link" href="/">Catálogo</a></li>
          </ul>
      </nav>
  </header>
    <Routes>
          <Route path="/catalogue" element={<catalogo/>}/>
          <Route path="/about" element={<about/>}/>
          <Route path="/" element={<Home/>}/>
    </Routes>
</Router>
  </>
)

export default App;
