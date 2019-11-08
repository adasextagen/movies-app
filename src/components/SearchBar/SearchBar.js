import React, {useState} from 'react'

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState('')
	const [placeholder] = useState('Buscar peli')
	const [searchResults, setSearchResults] = useState([])
	const [apiKey] = useState('e3087953b023a4a056fc42d81ebd595d')
	const [currentMovieId, setCurrentMovieId] = useState('')

	const onInputChange = e => {
		let query = e.target.value
		setSearchInput(query)
	}

	const handleKeyPress = e => {
		if (e.code === 'Enter' && searchInput.length > 3) {
			console.log('buscando...')
			fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`)
				.then(res => res.json())
				.then(res => setSearchResults({ searchResults: res.results }))
		}
	}

	const expandMovie = str => {
		setCurrentMovieId({str})
		// como setear isModalOpen: true  ??
	}

	return (
		<div>
			<input placeholder={placeholder} type='text' value={searchInput} onChange={e => onInputChange(e)} onKeyPress={e => handleKeyPress(e)}/>
			<ul>
				{searchResults && searchResults.map(e => (
						<li key={e.id}>
							<a onClick={() => expandMovie(e.id)}>{e.title}</a>
						</li>
					))}
			</ul>
		</div>
	)
}


export default SearchBar
