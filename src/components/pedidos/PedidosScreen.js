
import { useSelector } from 'react-redux'
import { Register } from '../auth/Register'
import { PedidosLogin } from './PedidosLogin'


//en este componente decimos que si el usuario ha introducido los datos podemos  pasr al siguiente paso
export const PedidosScreen = () => {
    const {register} = useSelector(state => state.authReducer) 
  return (
        (register)
         ? <PedidosLogin/>
         : <Register/>
  )
}
