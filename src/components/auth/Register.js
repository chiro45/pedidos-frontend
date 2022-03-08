import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { login } from '../../actions/user';
import { useForm } from '../../hooks/useForm'


export const Register = () => {
const dispatch = useDispatch();


const [ formValues, handleInputChange ] =  useForm()

const handleSubmit = (e)=>{
  const {name, mesa, telefono} = formValues
  e.preventDefault()
   if( name === undefined || name.length < 2){
     Swal.fire('Error', 'Todos los  campos deben estar llenos', 'error')
    }else if( mesa === undefined || mesa.length < 1){
        Swal.fire('Error',' Todos los campos deben estar llenos', 'error')   
    }else{
            dispatch(login(name, mesa))
        Swal.fire('Perfecto','Continua tu pedido', 'success')
    }
}


 return (
    <div className='register__ContainerScreen'>
       <div className='register__container'>
            <form className='register__container-form' onSubmit={handleSubmit}>
                <div className='register__container-title'>
                        <h1>Comencemos <i className="fa-solid fa-list-check"></i></h1>
                </div>
                <div className='register__container-info'>
                        <p>Su pedido estara en unos minutos, si el local esta muy concurrido procure avisar a los mozos de que su pedido esta hecho desde ya muchas gracias!</p>        
                </div>
                <div className='register__container-inputs'>
                        <input type='text' 
                        name='name'
                        onChange={handleInputChange}
                         placeholder='Nombre'
                         autoComplete='off'/>
                        <input type='text' 
                        name='mesa'
                        onChange={handleInputChange}
                         placeholder='Mesa'
                         autoComplete='off'/>
                </div>
                <div className='register__container-button'>
                        <button type='submit'className='register__buton'>Confirmar <i className="fa-solid fa-check"></i></button>
                </div>
            </form>
       </div>
    </div>
  )
}
