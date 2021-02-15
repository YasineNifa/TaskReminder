import { useState } from 'react'

const AddTask = ({onAdd}) => {
	
	const [text, setText] = useState("")
	const [day, setDay] = useState("")
	const [reminder, setReminder] = useState(false)



	
	const onSubmit = (e) => {
		e.preventDefault()
		if (! text){
			alert('Please add task')
			return
		}

		onAdd({text, day, reminder})
		setText("")
		setDay("")
		setReminder(false)
	}

	return (

		<form className="add-form" onSubmit = {onSubmit}>
			<div className="form-control">
				<label>Task</label>
				<input 
				type="text" 
				name="newTask" 
				placeholder="add a new task" 
				value= {text} 
				onChange = {(e) => setText(e.target.value)}/>
			</div>
			<div className="form-control">
				<label>Day & Time</label>
				<input 
				type="text" 
				name="time" 
				placeholder="add day and time" 
				value = {day} 
				onChange={(e) => setDay(e.target.value)}/>
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input 
				type="checkbox" 
				name="reminder" 
				checked = {reminder}
				value = {reminder} 
				onChange = {(e) => setReminder(e.currentTarget.checked)}/>
			</div>
			
			<input type="submit" name="save" value ="save" className="btn btn-block" />

		</form>


		);
}

export default AddTask;