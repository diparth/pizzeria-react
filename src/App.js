import { Route, Routes } from 'react-router-dom';

import './App.scss';

import Cart from './components/cart/Cart';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Orders from './components/orders/Orders';

function App() {
	return (
		<div className="app">
			<div className='top-bar'></div>
			<div className='app-container'>				
				<Navbar title='Pizzeria'></Navbar>
				
				<div className='body-container'>
					<Routes>
						<Route path='/' element={<h1 style={{textAlign: 'center'}}>Welcome to the Pizzeria!</h1>}></Route>
						<Route path='/menu' element={<Menu />}></Route>
						<Route path='/cart' element={<Cart />}></Route>
						<Route path='/orders' element={<Orders />}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
