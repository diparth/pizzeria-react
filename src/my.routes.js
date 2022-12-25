import { Route, Routes } from 'react-router-dom';

import Cart from './components/cart/Cart';
import Menu from './components/menu/Menu';
import NotFound from './components/not-found/NotFound';
import OrderDetail from './components/orders/order-detail/OrderDetail';
import OrderLayout from './components/orders/order-layout';
import OrdersList from './components/orders/orders-list/OrdersList';

export default function MyRoutes() {
	const welcomeText = (
		<h1 style={{ textAlign: 'center' }}>Welcome to the Pizzeria!</h1>
	);

	return (
		<Routes>
			<Route path="/" element={welcomeText}></Route>
			<Route path="/menu" element={<Menu />}></Route>
			<Route path="/cart" element={<Cart />}></Route>
			<Route path="/orders" element={<OrderLayout />}>
				<Route path="" element={<OrdersList />}></Route>
				<Route path=":orderId" element={<OrderDetail />}></Route>
			</Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	);
}
