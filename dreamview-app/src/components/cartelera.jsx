import React from 'react'
import MovieCard from './movieCard';



export default function Cartelera({ movies }) {


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
