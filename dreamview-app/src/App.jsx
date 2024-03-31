import React, { useState, useEffect } from 'react';
import Cartelera from './components/cartelera';
import Nav from './components/nav';
import films from "./local-json/films.json"
import SpotedMovies from './components/spotedMovies';
import ShoppingForm from './components/shoppingForm';

const getmovies = async () => {
	try {
		const response = await new Promise((resolve) => {
			setTimeout(() => {
				resolve(films);
			}, 1000);
		});
		return response;
	} catch (error) {
		console.error(error);
		return [];
	}
};

const App = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchMovies = async () => {
			const movieData = await getmovies();
			setMovies(movieData);
		};
		fetchMovies();
	}, []);
	return (
		<>
			<Nav />
			<SpotedMovies movies={movies ? movies : []} />
			<div id='cartelera'>
				<Cartelera movies={movies} />
			</div>
			<div id='comprar'>
				<ShoppingForm movies={movies} selected='' />
			</div>
			<article>shopping form</article>
			<article>message form</article>
			<article>succes message</article>
		</>
	);
};

export default App;