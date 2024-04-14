function CreateTodo() {
	return (
		<div className='container ml-5 mt-5 mb-5'>
			<div className='justify-between'>
				<input
					type='text'
					className='border-none bg-transparent outline-none text-gray-900 float-left'
					placeholder='Enter todo...'
				/>
				<div className='add float-right mr-8'>
					<img className='h-6 cursor-pointer' src='add.svg' alt='add icon' />
				</div>
			</div>
		</div>
	)
}

export default CreateTodo
