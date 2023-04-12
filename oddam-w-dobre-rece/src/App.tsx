import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/" element={<Home />}></Route>
				<Route path='/register' element={<Register />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/logout' element={<Logout />}></Route>
			</Routes>

		</Router>
	);
}

export default App;
