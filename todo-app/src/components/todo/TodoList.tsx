import CreateTodo from '../createTodo/createTodo'
import Todo from './todo'

function TodoList() {
	return (
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
	)
}

export default TodoList
