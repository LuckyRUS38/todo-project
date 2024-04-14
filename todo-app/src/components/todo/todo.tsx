interface TodoProps {
	text: string
	isChecked?: boolean
}

function Todo({ text, isChecked }: TodoProps) {
	return (
		<div className='flex mb-2'>
			<input type='checkbox' defaultChecked={isChecked} className='mr-3' />
			<p className='font-medium text-gray-900'>{text}</p>
		</div>
	)
}

export default Todo
