import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { bebidas } from '../../helpers/bebidas';
import { brunchs } from '../../helpers/brunchs';
import { cafes } from '../../helpers/cafes';
import { cervezas } from '../../helpers/cervezas';
import { jugos } from '../../helpers/jugos';
import { menuEjecutivo } from '../../helpers/menuEjecutivo';
import { panaderia } from '../../helpers/panaderia';
import { picoteo } from '../../helpers/picoteo';
import { smoothies } from '../../helpers/smoothies';
import { tes } from '../../helpers/tes';
import { tortas } from '../../helpers/tortas';
import { tragos } from '../../helpers/tragos';
import { vinos } from '../../helpers/vinos';


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
            case 'tes':
                setstate(tes)
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
             case 'smoothies':
                 setstate(smoothies)
             break;
             case 'brunchs':
                setstate(brunchs)
            break;
            case 'picoteo':
                setstate(picoteo)
            break;
            case 'bebidas':
                setstate(bebidas)
            break;
            case 'cervezas':
            setstate(cervezas)
            break;
            case 'tragos':
            setstate(tragos)
            break;
            case 'vinos':
            setstate(vinos)
            break;
            case 'menuEjecutivo':
            setstate(menuEjecutivo)
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
                      <select  onChange={handleChange} defaultValue='cafes'>
                          <option disabled value='categorie'>Categorias</option>
                          <optgroup className='optGroup' >
                          <option value='cafes'>Cafes</option>
                          <option value='tes'>Tes</option>
                          <option value='panaderia'>Panaderia</option>
                          <option value='tortas'>Tortas</option>
                          <option value='jugos'>Jugos</option>
                          <option value='brunchs'>Brunch</option>
                          <option value='picoteo'>Picoteo</option>
                          <option value='bebidas'>Bebidas</option>
                          <option value='cervezas'>Cervezas</option>
                          <option value='tragos'>Tragos</option>
                          <option value='vinos'>Vinos</option>
                          <option value='menuEjecutivo'>Menu Ejecutivo</option>
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
