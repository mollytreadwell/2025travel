import Header from './components/Header.js';
import Cards from './components/Cards.js';
import Footer from './components/Footer.js';
import Apricale from "./components/Apricale.js";
import Baja from "./components/Baja.js";
import Idaho from './components/Idaho.js';
import { data } from './data.js';
import './App.css';

function App() {
	const mappedData = data.map((item) => {
		return (
			<Cards key={item.id} item={item} />
		)
	})
	return (
		<div className="App">
			<Header />
			{mappedData}
			<Footer />
		</div>
	);
}

export default App;
