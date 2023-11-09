import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import { Dashboard } from "./component";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Dashboard />
			</header>
		</div>
	);
}

export default App;
