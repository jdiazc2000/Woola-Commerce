const Squares = ({id,image,descripción}) => {

    return (
    <>


        <div key={id} className="squares"  data-aos="zoom-in" data-aos-duration="1000">
            <img src={image} alt="good-things"/>
            <h2>{descripción}</h2>
        </div>
    
    </>
    )
}

export default Squares 