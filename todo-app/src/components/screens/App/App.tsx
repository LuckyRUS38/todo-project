import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Starter from '../Starter/Starter'
import './App.css'

function App() {
	const isLogin = localStorage.getItem('isLogin')
	console.log(isLogin)

	return (
		<Routes>
			{!isLogin && <Route path='/' element={<Navigate to='/starter' />} />}
			{isLogin && <Route path='/' element={<Home />} />}
			<Route path='/starter' element={<Starter />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	)
}

export default App
