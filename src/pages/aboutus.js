
import NavBarStructura from "../pages/components/NavBarStructure/NavBarStructure"
import ReviewCards from "./components/ReviewsCards/ReviewCards"
import AboutSquares from "./sections/about_squares"
import Footer from "./sections/footer"
import Map from "./sections/map"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer";

const AboutUs = () => {

    const { ref, inView } = useInView({
        threshold: 0.3
    });

    const animation = useAnimation();

    useEffect(() => {

        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    type: 'fade', duration: 1
                }
            })
        }
    }, [inView, animation]);

    return (
        <>
            <NavBarStructura />

            <div id="About-Us">

                {/*AboutUs-Title */}
                <div className="title">
                    <motion.div initial={{ x: -40 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
                        <h2>Sobre nosotros</h2>
                    </motion.div>
                </div>


                {/*AboutUs-Squares */}
                <AboutSquares />


                {/*Reviews-TItle */}
                <div className="title-section">

                    <motion.div initial={{ x: -40 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
                        <h2>Opiniones</h2>
                    </motion.div>


                    {/*Reviews-Cards */}
                    <div id="Reviews" ref={ref}>
                        <motion.div animate={animation} className="Motion_Div_Reviews">
                            <ReviewCards gender="male" />
                            <ReviewCards gender="female" />
                            <ReviewCards gender="male" />
                            <ReviewCards gender="female" />
                            <ReviewCards gender="male" />
                            <ReviewCards gender="female" />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/*Map*/}
            <div id="Ubication">
                <div className="title">
                    <motion.div initial={{ x: -40 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
                        <h2>Ubicación</h2>
                    </motion.div>
                </div>

                <Map />
            </div>


            {/*Footer */}
            <Footer />
            </>
            )

}

            export default AboutUs