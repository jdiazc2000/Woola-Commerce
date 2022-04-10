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
        }else{
            animation.start({ opacity: 0 })
        }

    }, [inView, animation]);

    return (
        <>

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

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", stiffness: 100 }}>
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
            <Map />

            {/*Footer */}
            <Footer />
        </>
    )

}

export default AboutUs