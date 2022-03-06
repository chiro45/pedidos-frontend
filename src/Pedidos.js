
import { Provider } from 'react-redux';

import {PedidosScreen} from './components/pedidos/PedidosScreen'
import { store } from './store/store'

import './styles/styles.scss'

export const Pedidos = () => {


  return (
      
    <Provider store={store}>
            <PedidosScreen/>
    </Provider>
  )
}
