import { React, useContext } from 'react'
import MovieCard from './movieCard';


export default function Cartelera({ movies }) {



	return (
		<>
			<section className='title-header'>

				<h2>En Cartelera</h2>
			</section>
			<section className='cartelera'>
				{movies.map((movie, index) => (

					<div key={index} className='movieCard'>
						<MovieCard Title={movie.Title} PosterImg={movie.Images} />


					</div>
				))}
			</section>
		</>
	)
}
