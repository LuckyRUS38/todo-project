import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TodoList from '../../todo/TodoList'
import './Home.css'

function Home() {
	const navigate = useNavigate()
	const isLogin = localStorage.getItem('isLogin')
	const name = 'Ann Swift'

	const handleQuit = () => {
		localStorage.setItem('isLogin', 'false')
		navigate('/', { state: { isLogin: false } })
	}

	useEffect(() => {
		if (isLogin === 'false') {
			window.location.href = '/starter'
		}
	}, [isLogin])

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-pink-100'>
			<div className='relative w-full h-72 bg-teal-500 flex flex-col justify-center items-center'>
				<div
					className='absolute top-4 right-4 cursor-pointer'
					onClick={handleQuit}
				>
					<img src='/gear-settings.svg' alt='settings' className='h-9' />
				</div>
				<div className='mb-2 mt-20'>
					<img src='/woman.png' alt='avatar' className='rounded-full h-32' />
				</div>
				<h1 className='text-white text-2xl'>Welcome {name}</h1>
			</div>
			<TodoList />
		</div>
	)
}

export default Home
