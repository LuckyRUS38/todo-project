import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateTodo from '../../createTodo/createTodo'
import Todo from '../../todo/todo'
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
			<div className='flex flex-col justify-start items-center w-full min-h-screen main-container'>
				<h1 className='text-gray-900 mt-20 mb-2 text-lg justify-start text-left font-medium'>
					Tasks list:
				</h1>
				<div className='flex flex-col justify-start items-start rounded-xl w-3/4 bg-white shadow-2xl tasks'>
					<CreateTodo />
					<div className='container ml-5 mb-8'>
						<h1 className='text-gray-900 mb-2 text-lg'>Main tasks</h1>
						<Todo isChecked={true} text='Learn programming by 12 a.m' />
						<Todo isChecked={true} text='Learn how to cook by 1 p.m' />
						<Todo text='Pick up kids by 2 p.m' />
						<Todo text='Have lunch by 3 p.m' />
						<Todo text='Go visit mum by 4 p.m' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
