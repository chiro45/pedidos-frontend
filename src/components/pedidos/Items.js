
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { addItem } from '../../actions/orders'
const initState = 0;
export const Items = ({id, nombre, precio}) => {
    
    const dispatch =  useDispatch()
    const [cant, setCant] = useState(initState); 
    const [input, setInput] = useState('');
    let [valor, setValor]= useState(initState)
    
    const handleAdd = (e)=>{
     let name = e.target.value
     let id =  Math.random() * (1 - 100) + 1;
     if(cant <=0){
         setCant(initState)
         setValor(initState)
        Swal.fire('Error', 'No se puede pedir un producto sin su cantidad', 'error')
     }else{
         dispatch(addItem(name, cant, input, id,valor, precio))
         Swal.fire('Correcto', 'Agregado al pedido', 'success')
         setInput('')
         setCant(initState)
         setValor(initState)
     }
    

     
 }
 const handleOneMore = ()=>{
    setCant(cant + 1)
    setValor(valor += precio)
    
 }
const handleOneLess = ()=>{
    setCant(cant - 1)
    setValor(valor -= precio)
    
}

const handleInputChange = ({target})=>{
    setInput(target.value)

    
}
   return (
     <div key={id}
      className='pedidos__container-item'>
          <div className='pedidos__container-itemdesc'>
          <p className='pedidos__name'>{nombre}</p> 
          <div className='container__cantidad'>
          <p> $ {precio}</p>
          <label>Precio</label>
          </div>
          <div className='container__cantidad'>
          <button onClick={handleOneLess}> <i className="fa-solid fa-minus"></i> </button>
          <p>{cant}</p>
          <label>Cant</label>
          <button onClick={handleOneMore}> <i className="fa-solid fa-plus"></i></button>
          </div>
          </div>
          <div className='container___buttonAdd'>
          <input  className='inputAdd' value={input} type='text' onChange={handleInputChange}  autoComplete='none' placeholder='¿Cómo lo quiero?'/>
          <button className='buttonAdd' value={nombre} onClick={handleAdd}>Agregar <i className="fa-solid fa-plus"></i></button>
          </div>
     </div>
   )

}



