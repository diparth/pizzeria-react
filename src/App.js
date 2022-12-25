import './App.scss';

import Navbar from './components/navbar/Navbar';
import MyRoutes from './my.routes';

function App() {
	return (
		<div className="app">
			<div className="top-bar"></div>
			<Navbar title="Pizzeria"></Navbar>
			<div className="app-container">
				<div className="body-container">
					<MyRoutes></MyRoutes>
				</div>
			</div>
		</div>
	);
}

export default App;
