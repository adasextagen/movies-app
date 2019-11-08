import React, {useState} from 'react'
import './Modal.scss'

const Modal = ({ children }) => {
	const [isModalOpen, toggleModal] = useState(false)
	const toggle = () => toggleModal({ isModalOpen: !isModalOpen })

	return (
		<div className={`modal ${!isModalOpen ? 'close' : ''}`}>
			<button onClick={() => toggle()}>x</button>
			{children}
		</div>
	)
}

export default Modal
