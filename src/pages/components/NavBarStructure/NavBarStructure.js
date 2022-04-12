import { motion } from "framer-motion"
import { NavLink} from "react-router-dom";

const NavBarStructure = () => {


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


    return  (
        <header id="header">
        <nav  className="nav">
        <motion.div initial={{x:0}} animate={{ x: 30 }} transition={{ type: "spring", stiffness: 100}}> <h1><span>WOOLA</span> COMMERCE</h1> </motion.div><label onClick={openMenu} className="nav-toogle" title="menu">  <i className="fa fa-solid fa-caret-down"></i>  </label>
            <ul className="nav-menu">
  
                <li className="nav-menu-item"><NavLink to="/" onClick={CloseMenu} path="true"  className="nav-link" 
                style={({ isActive }) => (isActive ? {color: '#8F00FF', fontWeight: 'bold' , backgroundColor: '#F0F0F0', borderBottom: '3px solid'} : {color: 'black'})}
                >Inicio</NavLink></li>
  
                <li className="nav-menu-item"><NavLink to="/aboutus" onClick={CloseMenu}  path="true"  className="nav-link"
                style={({ isActive }) => (isActive ? {color: '#8F00FF', fontWeight: 'bold' , backgroundColor: '#F0F0F0', borderBottom: '3px solid'} : {color: 'black'})}
                >Sobre nosotros</NavLink></li>
  
                <li className="nav-menu-item"><NavLink to="/catalogo" onClick={CloseMenu}  path="true"  className="nav-link"
                style={({ isActive }) => (isActive ? {color: '#8F00FF', fontWeight: 'bold' , backgroundColor: '#F0F0F0', borderBottom: '3px solid'} : {color: 'black'})}
                >Catálogo</NavLink></li>
  
            </ul>
        </nav>
    </header>
    )

}

export default NavBarStructure