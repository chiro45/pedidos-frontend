import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal'
import { useSelector } from 'react-redux'
export const Carrito = () => {

    const state = useSelector(state => state) 
const [open, setopen] = useState(false);

    const handleClick = ()=>{
         setopen(!open)
           
    }
    const closeModal = ()=>{
        setopen(!open)
    }

  return (
    <div className='modalScreen__container'>
    <div className='modal__container'>
    <button onClick={handleClick}>Mi pedido</button>
    <Modal
    isOpen={open}
    onRequestClose={closeModal}
 
    closeTimeoutMS={200}
    ariaHideApp={false}
    overlayClassName="modal-fondo"
    className='modal'>
        <h1>Mi Pedido:</h1>
       {
           state.itemsReducer.items.map(
               (item, i) => (
                <div key={i} className='modal__container-item'>
                    <div><span  className='modal__item-name'>{item.name}</span></div>
                    <div><p className='modal__item-cantidad' >{item.cantidad}</p></div>
                    <div><button className='modal__item-button' ><i className="fa-solid fa-trash-can"></i></button></div>
                </div>
           ))
       }
        <div className='modal__container-about'>
            <label>Sobre mi Pedido: </label>
            <textarea className='text-area' placeholder='Escribe...'></textarea>
        </div>


    </Modal>


    </div>    
        
    </div>
  )
}
