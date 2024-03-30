import React from 'react'
import films from "../local-json/films.json"




export default function MovieCard({ Title, PosterImg }) {

	if (PosterImg) console.log('poster img url', PosterImg[0])

	return (
		<div className='movieCard'>
			<div className='carteleraMovieCardTitle'>{Title}</div>
			<img className='carteleraMoviePoster' src={PosterImg ? PosterImg[0] : 'posterIMG'} />
			<div className='carteleraBuyTicketBtn'>Comprar Ticket</div>
		</div>
	)
}
