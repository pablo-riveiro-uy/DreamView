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
		let moviesData = [];
		let index = 0;
		movies.forEach((m) => {
			if (index <= 2) moviesData[index] = m;
			index++;
		});
		setSpottedMovies(moviesData);
	}, [movies]);

	return (
		<>
			<div className='sliderPage ' id='destacados'>

				<div
					className='heroImage'
					style={{
						backgroundImage: `url(${spottedMovies.length > 0 ? spottedMovies[currentIndex].Images[1] : ''
							})`,
						filter: 'blur(5px)',
					}}
				></div>
				<div className='slider-btn-left' onClick={handlePrevious}>
					{'<'}
				</div>
				<div className='carousel-container'>
					<div className='carousel-item'>
						<div className='mobile-rate'>

							<div className='rate-sqare '>
								<span className='material-symbols-outlined'>star</span>
								<p className='rate-text'>
									{spottedMovies.length > 0 ? spottedMovies[currentIndex].Rated : 'No Rate'}
								</p>
								<p className='rate-source'>IMOB</p>
							</div>
						</div>
						<div>

						</div>
						<div className='info-and-buttons'>
							<div className='movieInfo ocultar-div'>
								<h2>{spottedMovies.length > 0 ? spottedMovies[currentIndex].Title : 'No Title'}</h2>
								<p className='moviePlot'>
									{spottedMovies.length > 0 ? spottedMovies[currentIndex].Plot : 'No info'}
								</p>
							</div>


							<div className='slider-buttons mobil-slider-buttons '>

								<div className='slider-btn'>
									<div className='icons'>
										<p className='material-symbols-outlined'>smart_display</p>
									</div>
									<p>Ver trailer</p>
								</div>

								<div className='slider-btn'>
									<div className='icons'>
										<p className='material-symbols-outlined'>local_activity</p>
									</div>
									<p>Comprar ticket</p>
								</div>
							</div>

							<div className='poster-and-title'>

								<div className='mobil-poster'>
									<img
										className='carousel-poster'
										src={spottedMovies.length > 0 ? spottedMovies[currentIndex].Images[0] : 'No poster'}
									/>
								</div>
								<div className='oculta-div-on-desktop' >
									<h2>{spottedMovies.length > 0 ? spottedMovies[currentIndex].Title : 'No Title'}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='slider-btn-right mobil-right-slider-btn'>
					<div className='slider-btn-right' onClick={handleNext}>
						{'>'}
					</div>
				</div>


			</div>


		</>
	);
}
