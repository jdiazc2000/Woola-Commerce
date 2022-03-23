import Aos from "aos"
import "aos/dist/aos.css"
import {get} from "axios"
import { useEffect,useState } from "react"
import Squares from "../components/about_squares/squares"

const AboutSquares = () => {

    const [squares,setSquares] = useState()

    useEffect(() =>{
         get("https://my-json-server.typicode.com/jdiazc2000/WOOLA-COMMERCE-API/aboutus-items")
        .then(({ data }) => setSquares(data))
        .catch(e => console.log(e))
    },[])
    

    useEffect(()=>{
        Aos.init({});
    },[]);


    return (
    <>  
    <div id="About-Us">
        <div className="title">
            <h2>Sobre nosotros</h2>
        </div>

        <div className="squares-section">    
        {
                squares ? 
                (
                    squares.map(({id,image,descripción}) => (
                        <Squares
                            key = {id}
                            id={id}
                            image={image}
                            descripción={descripción}
                        />    
                    ))  
                ) 
                
                : (<span>Cargando Squares...</span>)
        }    

        </div>
    </div>         
    </>
    )
}

export default AboutSquares