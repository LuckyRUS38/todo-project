import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Login.css'
import slide from '/slide.png'

interface ILoginState {
	email: string
	password: string
}

function Login() {
	const { register, handleSubmit } = useForm<ILoginState>()

	const onSubmit: SubmitHandler<ILoginState> = data => {
		console.log(data)
	}

	return (
		<>
			<div className='min-h-screen flex flex-col justify-center items-center px-4 wrapper'>
				<div className='max-w-sm w-full text-center mb-4'>
					<h1 className='text-2xl font-bold text-gray-900 mb-4'>
						Welcome Back!
					</h1>
				</div>
				<div className='flex justify-center items-center mb-8 max-w-sm w-full text-center'>
					<img src={slide} alt='Person nearby phone todo list' className='' />
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='w-3/4 mt-4 flex flex-col justify-center items-center'
				>
					<input
						type='email'
						{...register('email', {
							required: true,
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						})}
						placeholder='Enter your email'
						className='block py-1.5 px-3 mb-5 w-full border border-transparent
						bg-white text-gray-800 placeholder:text-gray-900 outline-none rounded-3xl'
					/>
					<input
						type='password'
						{...register('password', {
							required: true,
							minLength: 8,
							pattern: /^[^\u0400-\u04FF]*$/,
						})}
						placeholder='Enter password'
						className='block py-1.5 px-3 mb-5 w-full border border-transparent
						bg-white text-gray-800 placeholder:text-gray-900 outline-none rounded-3xl'
					/>
					<span className='block text-center'>
						<Link
							to='/resetPassword'
							className='text-teal-400 hover:text-teal-500'
						>
							Forgot password
						</Link>
					</span>
					<button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-4 w-full rounded ease-in-out block justify-center items-center mt-4'>
						Log in
					</button>
					<span className='block text-center text-gray-900 mt-5'>
						Don't have an account?{' '}
						<Link to='/register' className='text-teal-400 hover:text-teal-500'>
							sign up
						</Link>
					</span>
				</form>
				<div className='progression mt-5 grid grid-cols-2 gap-2'>
					<Link to='/starter' className='w-3 h-3 bg-gray-600 rounded'></Link>
					<div className='w-3 h-3 bg-gray-800 rounded selected'></div>
				</div>
			</div>
		</>
	)
}

export default Login
