import './Menu.scss';
import { pizzeriaMenu } from '../../assets/APIs/menu';

export default function Menu(props) {
	function getSrc(menuItem) {
		return require('/src/assets/images/' + menuItem.asset);
	}

	const pizzaCards = pizzeriaMenu.map((item) => {
		return (
			<div className="menu-card" key={item.id}>
				<img src={getSrc(item)} alt={item.name} />
				<p className="item-label">{item.name}</p>
				<div className="item-action">
					<p className="price-label">Rs. {item.price}</p>
					<button className="add-btn">
						Add <i className="bi bi-plus-lg"></i>
					</button>
				</div>
			</div>
		);
	});

	return (
		<section id="menuPage">
			<h1 className="page-header">Explore Menu</h1>
			<div className="menu-container">{pizzaCards}</div>
		</section>
	);
}
