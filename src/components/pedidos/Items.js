import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { addItem } from '../../actions/orders'
const initState = 0
export const Items = ({id, nombre, precio}) => {
    const dispatch =  useDispatch()
    const [cant, setCant] = useState(initState); 
    const handleAdd = (e)=>{
     let name = e.target.value
     if(cant <=0){
         setCant(initState)
        Swal.fire('Error', 'No se puede pedir un producto sin su cantidad', 'error')
     }else{
         dispatch(addItem(name, cant))
         Swal.fire('Correcto', 'Agregado al pedido', 'success')
         setCant(initState)
     }
    

     
 }
 const handleOneMore = ()=>{
    setCant(cant + 1)
 }
const handleOneLess = ()=>{
    setCant(cant - 1)
}
   return (
     <div key={id}
      className='pedidos__container-item'>
          <div className='pedidos__container-itemdesc'>
          <p>{nombre}</p> 
          <p>{precio}</p>
          <p>{cant}</p>
          <div className='container__moreLess'>
          <button onClick={handleOneLess}> - </button>
          <button onClick={handleOneMore}> + </button>
          </div>
          </div>
          <button value={nombre} onClick={handleAdd}>Add</button>
     </div>
   )

}



