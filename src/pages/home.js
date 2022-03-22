import "../styles/styles-home.scss"
import Sales from "./sections/sales"
import Footer from "./sections/footer"
import Modals from "./sections/modals"
import BuyModals from "./sections/modalsbuy"
import Carousel from "./sections/carousel"

const Home = () => {

    return (
    <>
    <div id="Carousel">
        <Carousel/>
    </div>   
    <Sales/>
    <Modals/>
    <BuyModals/>
    <Footer/>
    
    </>
    )
}
export default Home;