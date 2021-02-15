import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAddForm, showAddForm}) => {
	/*const onClick = () => {
		console.log("Click")
	}*/
	return(
		<header className='header'>
			<h1> {title} </h1>
			<Button color = {showAddForm ? 'red':'green'} text={showAddForm ? 'close' : 'add'} onClick={onAddForm}/>
		</header>

		)
}
Header.defaultProps = {
	'title' : 'Task Tracker',
}





export default Header