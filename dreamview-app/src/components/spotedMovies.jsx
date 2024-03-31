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
			<div className='sliderPage' style={{ backgroundImage: `url(${spottedMovies.length > 0 ? spottedMovies[currentIndex].Images[1] : ''})` }}>

				<div className='slider-btn-left' onClick={handlePrevious}>{'<'}</div >
				<div className='carousel-container'>
					<div className="carousel-item">
						<div className='rate-sqare'>
							<span className="material-symbols-outlined">
								star
							</span>
							<p>{spottedMovies.length > 0 ? spottedMovies[currentIndex].Rated : 'No Rate'}</p>
							<p className='rate-source'>Wikipedia</p>

						</div>
						<div className='movieInfo'>

							<h2>{spottedMovies.length > 0 ? spottedMovies[currentIndex].Title : 'No Title'}</h2>
							<p className='moviePlot'> {spottedMovies.length > 0 ? spottedMovies[currentIndex].Plot : 'No info'}</p>
						</div>
						<img className='carousel-poster' src={spottedMovies.length > 0 ? spottedMovies[currentIndex].Images[0] : 'No poster'} />
					</div>
				</div>
				<div className='slider-btn-right' onClick={handleNext}>{'>'}</div >
			</div >
		</>
	);
}