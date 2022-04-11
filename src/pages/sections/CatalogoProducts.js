
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard/ProductCard"
import ProductCardEsqueleton from "../components/ProductCard-Squeleton/CardSqueleton"

const CatalogoProducts = () => {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState(products)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let componentMounted = true;
    setLoading(true)

    const getProducts = async () => {
      const response = await fetch('https://my-json-server.typicode.com/jdiazc2000/WOOLA-COMMERCE-API/catalogo');

      if (componentMounted) {
        setProducts(await response.clone().json());
        setFilter(await response.json())
        setLoading(false)
      }

    }

    getProducts();

    return () => {
      componentMounted = false;
    }

  }, []);


  const filterProduct = (marca) => {
    const updatedList = products.filter((x) => x.marca === marca);
    setFilter(updatedList);
  }

  const Loading = () => {
    return (
      <>
        <div className="Productos_Catalogo_Div">
          <ProductCardEsqueleton />
          <ProductCardEsqueleton />
          <ProductCardEsqueleton />
          <ProductCardEsqueleton />
        </div>
      </>
    )
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="ButtonDiv">
          <button onClick={() => setFilter(products)}> Todos </button>
          <button onClick={() => filterProduct('Gucci')}> Gucci  </button>
          <button onClick={() => filterProduct('Chanel')}> Chanel </button>
        </div>

        <div className="Productos_Catalogo_Div">
          {filter.map(({ id, tipo, marca, imagen, precio, preciooferta }) => {

            return (
              <ProductCard
                key={id}
                id={id}
                tipo={tipo}
                marca={marca}
                imagen={imagen.img1}
                precio={precio}
                preciooferta={preciooferta}
              />

            )
          })}
        </div>

      </>
    )
  }

  return (
    <>
      {loading ? <Loading /> : <ShowProducts />}
    </>
  )
}


export default CatalogoProducts