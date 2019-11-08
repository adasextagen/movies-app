import React, { Component } from 'react'

import Header from '../components/Header/Header'
import Modal from '../components/Modal/Modal'
import ModalMovie from '../components/ModalMovie'
import Movies from '../components/Movies/Movies'
import NavBar from '../components/NavBar/NavBar'
import SearchBar from '../components/SearchBar/SearchBar'

class Home extends Component {
	state = {
		apiKey: 'e3087953b023a4a056fc42d81ebd595d',
		currentMovieId: '',
		searchInput: '', // esto hay que borrarlo
		searchResults: [],
		movies: []
	}

	changeTitle = (newtitle) => {
		this.setState({ title: newtitle })
	}

	// setMovie = (str) => {
	// 	this.setState({ currentMovieId: str, isModalOpen: true })
	// }

	getMovies = (cat) => {
		fetch(`https://api.themoviedb.org/3/movie/${cat}?api_key=${this.state.apiKey}`)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ movies: res.results })
			})
	}

	componentDidMount() {
		this.getMovies('top_rated')
	}

	render() {
		let currentMovie =
			this.state.searchResults.find((e) => e.id === this.state.currentMovieId) ||
			this.state.movies.find((e) => e.id === this.state.currentMovieId)
		return (
			<React.Fragment>
				<Header>
					<NavBar />
				</Header>
				<div className={'container'}>
					<SearchBar />
					<Movies title={'Top Rated'} amount={5} />
					<Movies title={'Top Rated'} amount={5} />
					<Movies title={'Top Rated'} amount={5} />
					<Movies title={'Top Rated'} amount={5} />
				</div>
				<Modal>
					{currentMovie && <ModalMovie {...currentMovie} />}
				</Modal>
			</React.Fragment>
		)
	}
}

export default Home
