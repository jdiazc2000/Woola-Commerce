import "../../../styles/styles-catalogo.scss"
import { Fragment, useState } from "react"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const ProductBuy = ({ id, tipo, marca, imagen, colores, stock, talla }) => {

  const { register, formState: { errors }, reset, handleSubmit } = useForm();

  const [buttontextonbuy, setButtontextonbuy] = useState(false)


  const onSubmit = (data) => {

    setButtontextonbuy(true);

    const buytimer = setTimeout(() => {
      Swal.fire
        (
          'Compra realizada',
          'Pronto nos comunicaremos contigo :)',
          'success'
        )

      setButtontextonbuy(false);

      console.table(data);

      reset();
    }, 5000);
    return () => clearTimeout(buytimer);
  }


  const BackBuyModal = () => {
    reset();
  }


  return (
    <>
      <div className="modal fade hide" id={`exampleModalBuy${id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">

              <h1 className="modal-title" id={`exampleModalLabel-buy${id}`}>
                <div className="buy-title-form">

                  <div className="buy-title">
                    <p><b>Formulario de compra</b></p>
                  </div>
                </div>
              </h1>

            </div>
            <div className="modal-body">

              <div className="buy-title">
                <h4>{tipo} {marca}</h4>
              </div>

              <Fragment>

                <form id={`Formulario-producto-buy${id}`} onSubmit={handleSubmit(onSubmit)}>

                  <select style={{ display: "none" }} name="id_product" title="id_product" {...register('id_product')}>
                    <option defaultValue={id}>{id}</option>
                  </select>

                  <div className="Radio_colors">
                    <div className="Color_div">
                      <div className="Color_div_value">
                        <input
                          id={`color1-${id}`}
                          name="colores"
                          type="radio"
                          className="input-hidden"
                          {...register('color', { required: true })}
                          defaultValue={colores.color1}
                        />
                        <label htmlFor={`color1-${id}`}>
                          <img src={imagen.img1} alt="imgcolor1"></img>
                        </label>
                      </div>

                      <div className="Color_div_value">
                        <input
                          id={`color2-${id}`}
                          name="colores"
                          type="radio"
                          className="input-hidden"
                          {...register('color')}
                          defaultValue={colores.color2}
                        />
                        <label htmlFor={`color2-${id}`}>
                          <img src={imagen.img2} alt="imgcolor2"></img>
                        </label>
                      </div>

                      <div className="Color_div_value">
                        <input
                          id={`color3-${id}`}
                          name="colores"
                          type="radio"
                          className="input-hidden"
                          {...register('color')}
                          defaultValue={colores.color3}
                        />
                        <label htmlFor={`color3-${id}`}>
                          <img src={imagen.img3} alt="imgcolor3"></img>
                        </label>
                      </div>
                    </div>
                    {errors.color?.type === 'required' && <span style={{ color: "red" }}>Por favor elija en producto</span>}
                  </div>

                  <div className="ComboBoxes">
                    <label htmlFor="talla">Talla:</label>
                    <select
                      name="talla"
                      title="talla-form"
                      {...register('talla')}>
                      <option defaultValue={talla}>{talla}</option>
                    </select>

                    <label htmlFor="amount">Cantidad:</label>
                    <input
                      type="number"
                      defaultValue="1"
                      min="1"
                      max={stock}
                      title="stock-buy"
                      {...register('stock-buy')} />
                  </div>

                  <div className="name-last">
                    <p>Datos del titular:</p>
                    <input
                      type="text"
                      name="nomb_apell"
                      placeholder="Nombre y apellido"
                      {...register('nomb_apell', { required: true, pattern: /^[^\s]+( [^\s]+)+$/ })} />
                    {errors.nomb_apell?.type === 'required' && <span style={{ color: "red" }}>Por favor rellene este campo</span>}
                    {errors.nomb_apell?.type === 'pattern' && <span style={{ color: "red" }}>Ingrese nombres y apellidos validos</span>}

                    <p>Celular:</p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="N?? Celular"
                        {...register('phone', { required: true })} />
                      {errors.phone?.type === 'required' && <span style={{ color: "red" }}>Por favor rellene este campo</span>}
                  </div>

                  <div className="creditcard-info">

                    <p>Datos de tarjeta:</p>
                    <input
                      type="text"
                      name="creditcard_number"
                      placeholder="0000000000000000"
                      {...register('creditcard_number', { required: true, pattern: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/ })} />
                    {errors.creditcard_number?.type === 'required' && <span style={{ color: "red" }}>Por favor rellene este campo</span>}
                    {errors.creditcard_number?.type === 'pattern' && <span style={{ color: "red" }}>Ingrese n??mero de tarjeta v??lido</span>}


                    <div className="expi-ccv">

                      <div>
                        <input
                          type="text"
                          name="creditcard_expdate"
                          placeholder="MM/YY"
                          {...register('creditcard_expdate', { required: true, pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/ })} />

                        <div>
                          {errors.creditcard_expdate?.type === 'required' && <span style={{ color: "red" }}>Por favor rellene este campo</span>}
                          {errors.creditcard_expdate?.type === 'pattern' && <span style={{ color: "red" }}>Ingrese una fecha de expiraci??n v??lida</span>}
                        </div>
                      </div>


                      <div>
                        <input
                          type="text"
                          name="creditcard_ccv"
                          placeholder="CCV"
                          {...register('creditcard_ccv', { required: true, pattern: /^[0-9]{3,4}$/ })} />

                        <div>
                          {errors.creditcard_ccv?.type === 'required' && <span style={{ color: "red" }}>Por favor rellene este campo</span>}
                          {errors.creditcard_ccv?.type === 'pattern' && <span style={{ color: "red" }}>Ingrese un CCV v??lido</span>}
                        </div>
                      </div>

                    </div>

                    <div className="email">
                      <p>Correo electr??nico</p>
                      <input
                        type="text"
                        name="email_form_buy"
                        placeholder="Correo"
                        {...register('email_form_buy', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
                      {errors.email_form_buy?.type === 'required' && <span style={{ color: "red" }}>Por favor rellene este campo</span>}
                      {errors.email_form_buy?.type === 'pattern' && <span style={{ color: "red" }}>Ingrese un email v??lido</span>}
                    </div>

                    <div className="direction">
                      <p>Direcci??n</p>
                      <input
                        type="text"
                        name="direction"
                        placeholder="Direcci??n"
                        {...register('direction', { required: true })} />
                      {errors.direction?.type === 'required' && <span style={{ color: "red" }}>Por favor rellene este campo</span>}
                    </div>
                  </div>


                  <div className="modal-footer" style={{ justifyContent: "center" }}>
                    {
                      buttontextonbuy ? <button className="btn btn-secondary mr-auto" type="button">Procesando compra... <span><FontAwesomeIcon icon={faSpinner} className="spinner" /></span>
                      </button> :
                        <button type="submit" className="btn btn-secondary mr-auto" >Procesar compra</button>
                    }
                    <label className="btn btn-secondary mr-auto volver-btn" data-bs-dismiss="modal" onClick={BackBuyModal} >Volver</label>
                  </div>

                </form>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}

export default ProductBuy