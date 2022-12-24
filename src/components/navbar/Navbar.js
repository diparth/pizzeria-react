import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar(props) {
	const navItems = [
		{
			id: 0,
			link: '/menu',
			label: 'Menu',
		},
		{
			id: 1,
			link: '/',
			label: props.title,
		},
		{
			id: 2,
			link: '/orders',
			label: 'Orders',
		},
		{
			id: 3,
			link: '/cart',
			label: 'Cart',
		}
	];

	const navLinks = navItems.map((item, index) => {
		if (index === 1) {
			return (
				<li className="list-item logo" key={item.id}>
					<h1 className="title">
						<NavLink className='title-link' to={'/'}>{item.label}</NavLink>
					</h1>
				</li>
			);
		} else {
			return (
				<li className="list-item" key={item.id}>
					<NavLink end={true} className="nav-links" to={item.link}>{item.label}</NavLink>
				</li>
			);
		}
	});

	return (
		<section id='navBar'>
			<ul className="header">{navLinks}</ul>
		</section>
	);
}
