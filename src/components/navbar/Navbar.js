import './Navbar.scss';

export default function Navbar(props) {
	const navItems = ['Menu', 'Orders', props.title, 'Cart'];
	const navLinks = navItems.map((item, index) => {
		if (index === 2) {
			return (
				<li className="list-item logo" key={index}>
					<h1 className="title">{item}</h1>
				</li>
			);
		} else {
      return (
				<li className="list-item" key={index}>
					<button className="nav-links" onClick={() => linkClick(item)}>{item}</button>
				</li>
			);
    }
	});

	function linkClick(message) {
		console.log(props, message);
	}

	return (
		<section>
			<ul className="header">
				{ navLinks }
			</ul>
		</section>
	);
}
