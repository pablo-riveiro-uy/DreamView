import React, { useContext } from 'react'
import { MyContext } from '../App'



const handleComprar = () => {
	setActualMovie(Title)
}



export default function MovieCard({ Title, PosterImg }) {

	const { setActualMovie } = useContext(MyContext)

	return (
		<div className='movieCard'>
			<div className='carteleraMovieCardTitle'>{Title}</div>
			<img className='carteleraMoviePoster' src={PosterImg ? PosterImg[0] : 'posterIMG'} />
			<div className='carteleraBuyTicketBtn' >
				<a href='#comprar' onClick={handleComprar} >Comprar Ticket</a>
			</div>

		</div>
	)
}
