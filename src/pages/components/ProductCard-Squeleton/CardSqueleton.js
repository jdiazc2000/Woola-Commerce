import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const CardSqueleton = () => {

    return(

    <div className="sale-item articulo">
    <div className="sale" >
        <Skeleton  width={200} height={200}/>
    <div className="info">   
        <h2 style={{paddingTop:"25px"}}><Skeleton width={200}/></h2>
        <h4><Skeleton width={80}/></h4>
    </div>
         <Skeleton width={150} height={40} borderRadius={10}/>
    </div>
    </div>
    )
}

export default CardSqueleton
