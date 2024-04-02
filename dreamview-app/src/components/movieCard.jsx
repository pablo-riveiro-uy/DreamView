import React from 'react'





export default function MovieCard({ Title, PosterImg }) {


	return (
		<div className='movieCard'>
			<div className='carteleraMovieCardTitle'>{Title}</div>
			<img className='carteleraMoviePoster' src={PosterImg ? PosterImg[0] : 'posterIMG'} />
			<div className='carteleraBuyTicketBtn'>Comprar Ticket</div>
		</div>
	)
}
