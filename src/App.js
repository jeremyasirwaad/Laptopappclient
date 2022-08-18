import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./screens/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./screens/Login";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
