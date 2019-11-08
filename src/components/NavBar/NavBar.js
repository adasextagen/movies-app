import React, {useState} from 'react'
import './NavBar.scss'

const NavItem = ({ element }) => {
	return (
		<li>
			<a href={element.href}>{element.label}</a>
		</li>
	)
}

const NavBar = () => {
	const [navList] = useState([ 
			{label: 'Home', href: '/'},
			{label: 'Top Rated', href: '/top'},
			{label: 'Popular', href: '/popular'} 
		])

	return (
		<nav className={'mainNav'}>
			<ul>{navList.map((e, i) => <NavItem key={i} element={e} />)}</ul>
		</nav>
	)
}

export default NavBar
