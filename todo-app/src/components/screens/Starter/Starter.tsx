import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import phone from '/phone_red.png'

function Starter() {
	// Проверяем значение isLogin в localStorage
	const isLogin = localStorage.getItem('isLogin')

	useEffect(() => {
		// Если пользователь авторизован, перенаправляем на главную страницу
		if (isLogin === 'true') {
			window.location.href = '/' // или другой путь, куда нужно перенаправить
		}
	}, [isLogin]) // useEffect будет вызываться только при изменении isLogin

	return (
		<div className='relative min-h-screen flex flex-col justify-center items-center px-4 wrapper'>
			<div className='mb-8'>
				<img src={phone} alt='Person nearby phone todo list' className='' />
			</div>
			<div className='max-w-sm w-full text-center mb-4'>
				<h1 className='text-2xl font-medium text-gray-900 mb-2'>
					Gets things done with TODO
				</h1>
				<p className='text-gray-900 font-light'>
					In this application you can write down your everyday business to do,
					mention what you did and save it. Also, you can save your time instead
					of writing on the paper.
				</p>
			</div>
			<button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-4 w-2/5 rounded ease-in-out'>
				<Link to={'/register'}>Get Started</Link>
			</button>
			<div className='progression mt-5 grid grid-cols-2 gap-2'>
				<div className='w-3 h-3 bg-gray-800 rounded selected'></div>
				<Link to='/register' className='w-3 h-3 bg-gray-600 rounded'></Link>
			</div>
		</div>
	)
}

export default Starter
