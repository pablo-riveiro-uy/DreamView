import React, { useEffect, useState } from 'react';

export default function SpotedMovies({ movies }) {
	const [spottedMovies, setSpottedMovies] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 === spottedMovies.length ? 0 : prevIndex + 1
		);
	};

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? spottedMovies.length - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		let moviesData = []
		let index = 0;
		movies.forEach(m => {
			if (index <= 2) moviesData[index] = m
			index++;
		});
		setSpottedMovies(moviesData)
	}, [movies]);

	return (
		<>
			<div className='sliderPage'>
				<div className='slider-brn' onClick={handlePrevious}>{'<'}</div>
				<div className='carousel-container'>
					<div className="carousel-item">
						<div className='rate-sqare'>
							<p></p>
							<spam>{spottedMovies[currentIndex].Rated}</spam>
						</div>
						<h2>{spottedMovies.length > 0 ? spottedMovies[currentIndex].Title : 'No Title'}</h2>
						<img className='carousel-poster' src={spottedMovies.length > 0 ? spottedMovies[currentIndex].Images[0] : 'No poster'} />
					</div>
				</div>
				<div onClick={handleNext}>{'>'}</div>
			</div>
		</>
	);
}