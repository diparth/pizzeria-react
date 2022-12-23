import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar(props) {
	const navItems = [
		{
			link: '/menu',
			label: 'Menu',
		},
		{
			link: '/',
			label: props.title,
		},
		{
			link: '/orders',
			label: 'Orders',
		},
		{
			link: '/cart',
			label: 'Cart',
		}
	];

	const navLinks = navItems.map((item, index) => {
		if (index === 1) {
			return (
				<li className="list-item logo" key={item.id}>
					<h1 className="title">
						<Link className='title-link' to={'/'}>{item.label}</Link>
					</h1>
				</li>
			);
		} else {
			return (
				<li className="list-item" key={item.id}>
					<Link className="nav-links" to={item.link}>{item.label}</Link>
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
