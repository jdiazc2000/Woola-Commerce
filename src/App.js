import './styles/styles-nav.scss';
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Catalogo from "./pages/catalogo";
import { motion } from "framer-motion"
import {HashRouter  as Router, Route, Routes, NavLink} from "react-router-dom";


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
      <motion.div initial={{x:0}} animate={{ x: 30 }} transition={{ type: "spring", stiffness: 100}}> <h1><span>WOOLA</span> COMMERCE</h1> </motion.div><label onClick={openMenu} className="nav-toogle" title="menu">  <i className="fa fa-solid fa-caret-down"></i>  </label>
          <ul className="nav-menu">

              <li className="nav-menu-item"><NavLink to="/" onClick={CloseMenu} exact="true"  className="nav-link" 
              style={({ isActive }) => (isActive ? {color: '#8F00FF', fontWeight: 'bold' , backgroundColor: '#F0F0F0', transition: '0.5s ease-in-out'} : {color: 'black'})}
              >Inicio</NavLink></li>

              <li className="nav-menu-item"><NavLink to="/aboutus" onClick={CloseMenu} exact="true"  className="nav-link"
              style={({ isActive }) => (isActive ? {color: '#8F00FF', fontWeight: 'bold' , backgroundColor: '#F0F0F0', transition: '0.5s ease-in-out'} : {color: 'black'})}
              >Sobre nosotros</NavLink></li>

              <li className="nav-menu-item"><NavLink to="/catalogo" onClick={CloseMenu} exact="true"  className="nav-link"
              style={({ isActive }) => (isActive ? {color: '#8F00FF', fontWeight: 'bold' , backgroundColor: '#F0F0F0', transition: '0.5s ease-in-out'} : {color: 'black'})}
              >Catálogo</NavLink></li>

          </ul>
      </nav>
  </header>
    <Routes>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/" element={<Home/>}/>
    </Routes>
</Router>
  </>
)

export default App;
