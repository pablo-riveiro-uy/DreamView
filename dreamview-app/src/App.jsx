import React, { useState, useEffect, createContext, useContext } from 'react';
import Cartelera from './components/cartelera';
import Nav from './components/nav';
import films from "./local-json/films.json"
import SpotedMovies from './components/spotedMovies';
import ShoppingForm from './components/shoppingForm';

export const MyContext = createContext();


// This tunction simulates an api interaction to get the movies

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

	const [actualMovie, setActualMovie] = useState([])

	const [movies, setMovies] = useState([]);
	//  on the first render of the page we get the movies data from the "API" using getmovies function

	useEffect(() => {
		const fetchMovies = async () => {
			const movieData = await getmovies();
			setMovies(movieData);
		};
		fetchMovies();
	}, []);
	return (
		<>
			<MyContext.Provider value={{ actualMovie, setActualMovie }}>

				<Nav />
				<SpotedMovies movies={movies ? movies : []} />
				<div id='cartelera'>
					<Cartelera movies={movies} />
				</div>
				<div id='comprar'>
					<ShoppingForm movies={movies} />
				</div>
			</MyContext.Provider >

		</>
	);
};

export default App;