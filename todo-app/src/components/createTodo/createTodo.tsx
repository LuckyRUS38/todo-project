function createTodo() {
	return (
		<div className='container ml-5 mt-5 mb-5 flex justify-end'>
			<div className='flex flex-grow'>
				<input
					type='text'
					className='border-none bg-transparent outline-none text-gray-900 w-4/5'
					placeholder='Enter todo...'
				/>
				<div className='add'>
					<img
						className='h-6 cursor-pointer ml-2'
						src='add.svg'
						alt='add icon'
					/>
				</div>
			</div>
		</div>
	)
}

export default createTodo
