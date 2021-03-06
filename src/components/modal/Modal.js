

import moment from 'moment'


import Modal from 'react-modal/lib/components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { itemDelete, itemsLogout } from '../../actions/orders'
import { closeModal, openModal } from '../../actions/ui'
import { logout } from '../../actions/user'
moment.locale('es');


const API_URL = process.env.REACT_APP_API_URL
export const Carrito = () => {
    
    const {authReducer, itemsReducer, uiReducer} = useSelector(state => state) 
    const dispatch = useDispatch()
    



    const handleClick = ()=>{
        dispatch(openModal())
           
    }
    const closeModall = ()=>{
        dispatch(closeModal())
    }

    const handleSubmit = async()=>{

        if(itemsReducer.items.length === 0){
            return Swal.fire('Error','El pedido debe contenter al menos un elemento','error')
        }
        const data = {
            nombre: authReducer.user.name,
            state: 'NoConfirmado',
            mesa: authReducer.user.mesa,
            pedido: itemsReducer.items,
            dateCreated: moment().locale('ar').format('MM-DD-YYYY'),
            date: moment().locale('ar').format('lll'),
            monto: null,

        }

        try {   
           
            //http://192.168.77.100:4000/api/send => pruebas local diferentes dispositivos
          await  fetch('http://192.168.77.104:4000/api/send',{
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                  }

                }).then(res => res.json())
                closeModall()
                Swal.fire('Listo','Pedido enviado','success')
                dispatch(logout())
                dispatch(itemsLogout())
            } catch (error) {
            console.log(error)
            Swal.fire('Error','El pedido no se puedo realizar','error')

        }
       
    }
    const handleDelete = ({target})=>{
        console.log(process.env.API_URL)
        dispatch(itemDelete(target.id))
       
    }
   
  return (
    <div className='modalScreen__container'>
    <div className='modal__container'>
    <div className='pedido__container'>
    <button  className='pedido__button' onClick={handleClick}>Mi pedido :</button>
    </div>
    <Modal
    isOpen={uiReducer.modalOpen}
    onRequestClose={closeModall}
 
    closeTimeoutMS={200}
    ariaHideApp={false}
    overlayClassName="modal-fondo"
    className='modal'>
        <div  onClick={closeModall} className='container__cross'><i className="fa-regular fa-circle-xmark iconoCross"></i></div>
        <h1>Mi Pedido:</h1> 
       {
           itemsReducer.items.map(
               ({name, sobre, cantidad, id}, i) => (
                   <div key={i} className='modal__container-item'>
                    <div>
                        <span  className='modal__item-name'>{name}</span>
                        {
                            (sobre.length > 2)
                            ? <p className='modal__item-nota'>Nota:{sobre}</p>
                            : null
                        }
                    </div>
                    <div><p className='modal__item-cantidad' >{cantidad}</p></div>
                
                     <div >
                     <button  type='button' 
                      
                      className='modal__item-button' 
                      >
                            <i onClick={handleDelete} id={id} className="fa-solid fa-trash-can">
                    </i>
                         
                    </button>
                                
                     </div>
                    
                    
                <div>
                </div>
                </div>
                
                ))
                
            }

            <div>
                <h1>{itemsReducer.items.total}</h1>
            </div>
      
        <div className='container__button-Submit'>
                <button onClick={handleSubmit}>Enviar Pedido</button>   
        </div>
      
    </Modal>


    </div>    
        
    </div>
  )
}
