import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import GetInTouch from "./components/GetInTouch";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Header />
			<AboutUs />
			<Services />
			<GetInTouch />
		</div>
	);
}

export default App;
