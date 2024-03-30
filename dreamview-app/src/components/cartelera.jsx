import React from 'react'
import MovieCard from './movieCard';
import { useEffect, useState } from 'react';
import films from "../local-json/films.json"

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


export default function Cartelera() {
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
			<div className='cartelera'>
				{movies.map((movie, index) => (

					<div key={index} className='movieCard'>
						<MovieCard Title={movie.Title} PosterImg={movie.Images} />

					</div>
				))}
			</div>
		</>
	)
}
