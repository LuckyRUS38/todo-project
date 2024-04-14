import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

interface IRegisterState {
	name: string
	email: string
	password: string
	retryPassword: string
}

function Register() {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm<IRegisterState>()

	const onSubmit: SubmitHandler<IRegisterState> = data => {
		if (data.password !== data.retryPassword) {
			console.log('Пароли расходятся')
			return false
		} else {
			localStorage.setItem('isLogin', 'true')
			// Перенаправляем пользователя на главную страницу с параметром isLogin = true
			navigate('/', { state: { isLogin: true } })
			return true
		}
	}

	return (
		<>
			<div className='min-h-screen flex flex-col justify-center items-center px-4 wrapper'>
				<div className='max-w-sm w-full text-center mb-4'>
					<h1 className='text-2xl font-bold text-gray-900 mb-4'>
						Welcome Onboard
					</h1>
					<p className='text-gray-900'>Let's help you meet up your tasks</p>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='w-3/4 mt-4 flex flex-col justify-center items-center'
				>
					<input
						type='text'
						{...register('name')}
						placeholder='Enter your full name'
						className='block py-1.5 px-3 mb-5 w-full border border-transparent
						bg-white text-gray-800 placeholder:text-gray-900 outline-none rounded-3xl'
					/>
					<input
						type='email'
						{...register('email')}
						placeholder='Enter your email'
						className='block py-1.5 px-3 mb-5 w-full border border-transparent
						bg-white text-gray-800 placeholder:text-gray-900 outline-none rounded-3xl'
					/>
					<input
						type='password'
						{...register('password')}
						placeholder='Enter password'
						className='block py-1.5 px-3 mb-5 w-full border border-transparent
						bg-white text-gray-800 placeholder:text-gray-900 outline-none rounded-3xl'
					/>
					<input
						type='password'
						{...register('retryPassword')}
						placeholder='Confirm password'
						className='block py-1.5 px-3 mb-5 w-full border border-transparent
						bg-white text-gray-800 placeholder:text-gray-900 outline-none rounded-3xl'
					/>
					<button
						type='submit'
						className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-4 w-full rounded ease-in-out block justify-center items-center mt-4'
					>
						Register
					</button>
				</form>
				<span className='block text-center text-gray-900 mt-5'>
					Already have an account?{' '}
					<Link to='/login' className='text-teal-400 hover:text-teal-500'>
						sign in
					</Link>
				</span>
				<div className='progression mt-5 grid grid-cols-2 gap-2'>
					<Link to='/starter' className='w-3 h-3 bg-gray-600 rounded'></Link>
					<div className='w-3 h-3 bg-gray-800 rounded selected'></div>
				</div>
			</div>
		</>
	)
}

export default Register
