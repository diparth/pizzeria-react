import './Navbar.scss';

export default function Navbar() {
	return (
		<section>
			<ul className="header">
        <li className='list-item'><a className='nav-links' href='#menu'>Menu</a></li>
        <li className='list-item'><a className='nav-links' href='#orders'>Orders</a></li>
        <li className='list-item logo'>
          <h1 className='title'>Pizzeria</h1>
        </li>
        <li className='list-item'><a className='nav-links' href='#cart'>Cart</a></li>
      </ul>
		</section>
	);
}
