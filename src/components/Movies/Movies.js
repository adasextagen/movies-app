import React, {useState} from 'react'

const Movie = (props) => {
	let { title, id, onClick } = props
	return (
		<li>
			<a onClick={() => onClick(id)}>
				<strong>{title}</strong>
			</a>
		</li>
	)
}

const Movies = () => {
	const [movies] = useState([])
	const [totalMovies, setTotalMovies] = useState(this.props.amount)
	const [currentPage, setCurrentPage] = useState(1)

	const showMore = e => {
		e.preventDefault()
		if (movies.length > totalMovies) {
			let increment = currentPage + 1

			setCurrentPage(increment)
			setTotalMovies(totalMovies * increment)
		}
	}

	const expandMovie = str => setCurrentMovieId({str})

	let aux = amount ? movies.slice(0, totalMovies) : movies
		
		return (
			<div>
				<h3>{title}</h3>
				<ul>{aux.map((movie, i) => <Movie key={i} {...movie} onClick={expandMovie(str)} />)}</ul>
				<button onClick={e => showMore(e)}>show more</button>
			</div>
		)
}

export default Movies
