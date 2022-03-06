import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {panaderia, cafes, jugos, tortas, } from '../../helpers/listados';

import { useResult } from '../../hooks/useResult';
import { Carrito } from '../modal/Modal';
import { Items } from './Items';
export const PedidosLogin = () => {

    const {authReducer}  = useSelector(state=> state)
    const [state, setstate] = useState([]);
    const [ handleInputChange] = useResult()
    
    

    const handleChange = (e)=>{ 
    
     switch (e.target.value) {
         case 'cafes':
            setstate(cafes)
             break;
             case 'panaderia':
            setstate(panaderia)
             break;
             case 'tortas':
            setstate(tortas)
             break;
             case 'jugos':
            setstate(jugos)
             break;
     
         default:
             setstate('cafes');
     }
     
    }


  return (
    <div className='pedidos__containerScreen'>
        <div className='pedidos__container'>
            <div className='pedidos__user-info'>
            <h2> Nombre: {authReducer.user.name}</h2>
            <h2> Mesa: {authReducer.user.mesa}</h2>
            </div>
            <div className='pedidos__busqueda'>
               <div className='pedidos__container-input'>
                      <input type='text' name='busqueda' onChange={handleInputChange}  placeholder='Buscar Producto'/>
               </div>
               <div className='pedidos__container-selector'>
                      <select onChange={handleChange}>
                         
                          <option disabled>Categorias</option>
                          <option value='cafes'>Cafes</option>
                          <option value='panaderia'>Panaderia</option>
                          <option value='tortas'>Tortas</option>
                          <option value='jugos'>Jugos</option>
                         
                      </select>
               </div>
               <div className='pedidos__container-resultados'>
                  { 
                       state.map( ({nombre, precio}, i)=>( 
                       <Items
                        key={i} 
                        nombre={nombre}
                        precio={precio}
                        />
                        )
                        )
                  } 
               </div>
               <Carrito/>
            </div>
        </div>    
    </div>
  )
}
