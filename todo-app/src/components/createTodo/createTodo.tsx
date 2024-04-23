import { SubmitHandler, useForm } from 'react-hook-form'

interface ICreateTodoState {
	todo: string
}

function CreateTodo() {
	const { register, handleSubmit, reset } = useForm<ICreateTodoState>()

	const onSubmit: SubmitHandler<ICreateTodoState> = data => {
		console.log(data)

		reset()
	}

	return (
		<div className='container ml-5 mt-5 mb-5'>
			<div className='justify-between'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						{...register('todo')}
						className='border-none bg-transparent outline-none text-gray-900 float-left'
						placeholder='Enter todo...'
					/>
					<div className='add float-right mr-8'>
						<button type='submit'>
							<img
								className='h-6 cursor-pointer'
								src='add.svg'
								alt='add icon'
							/>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default CreateTodo
