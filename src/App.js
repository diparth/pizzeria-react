import './App.scss';
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<div className="app">
			<div className='top-bar'></div>
			<div className='body-container'>				
				<Navbar title='Pizzeria'></Navbar>
				<h1 style={{textAlign: 'center'}}>Welcome to the Pizzeria!</h1>				
			</div>
		</div>
	);
}

export default App;
