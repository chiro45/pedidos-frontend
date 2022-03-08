import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {panaderia, cafes, jugos, tortas, } from '../../helpers/listados';

import { Carrito } from '../modal/Modal';
import { Items } from './Items';
export const PedidosLogin = () => {

    const {authReducer}  = useSelector(state=> state)
    const [state, setstate] = useState([]);
    const handleChange = ({target})=>{ 
        
        switch (target.value) {
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
    
    useEffect(() => {
       setstate(cafes)
    }, []);
    
  return (
    <div className='pedidos__containerScreen'>
        <div className='pedidos__container'>
            <div className='pedidos__user-info'>
            <h2> Nombre: {authReducer.user.name}</h2>
            <h2> Mesa: {authReducer.user.mesa}</h2>
            </div>
            <div className='pedidos__busqueda'>
               <div className='pedidos__container-title'>
                         <h2>Selecciona tu Orden <i className="fa-solid fa-pen-to-square"></i></h2>
               </div>
               <div className='pedidos__container-selector'>
                      <select onChange={handleChange} defaultValue='cafes'>
                          <option disabled value='categorie'>Categorias</option>
                          <optgroup>
                          <option value='cafes'>Cafes</option>
                          <option value='panaderia'>Panaderia</option>
                          <option value='tortas'>Tortas</option>
                          <option value='jugos'>Jugos</option>
                          </optgroup>
                         
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
                        <div className='container__pedido-fixed'>
                            <Carrito/>
                        </div>
               </div>
            </div>
        </div>    
    </div>
  )
}
