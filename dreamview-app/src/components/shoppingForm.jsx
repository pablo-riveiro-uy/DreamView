import React, { useState, useEffect } from 'react';

export default function ShoppingForm({ movies }) {

	const funciones = [
		'30/10/2023 14:00',
		'30/10/2023 17:30',
		'30/10/2023 20:00',
		'30/10/2023 22:30',
	]

	const asientos = [
		'Fila 1 asiento 1',
		'Fila 1 asiento 2',
		'Fila 1 asiento 3',
		'Fila 1 asiento 4',
		'Fila 1 asiento 5',
		'Fila 1 asiento 6',
		'Fila 1 asiento 7',
	]


	return (
		<div className='buyTicketPage'>
			<header className='buyTicketHdr'>
				<h2>Comprar Ticket</h2>
				<p>Selecciona una función</p>
			</header>
			<section className="buyTichetSection">
				<form id='buyTicketForm'>
					<div className='formLabels'>
						<label htmlFor="movie">Seleccione película:</label>
					</div>
					<div className='myForms'>
						<select className='myOptions' name="movie" id="movie" form="buyTicket">
							{movies ? movies.map((movie, index) => (
								<option key={index} value={movie.Title}>{movie.Title}</option>
							)) : 'No Movies'}
						</select>
					</div>

					<div className='formLabels'>
						<label for="funcion">Seleccione funcion:
						</label>
					</div>

					<div className='myForms'>
						<select className="myOptions" name="" id="movie" form="buyTicket">
							{funciones.map((funcion, index) => (
								<option key={index} value={funcion}>{funcion}</option>
							))}
						</select>
					</div>

					<div className='formLabels'>
						<label for="funcion">Seleccione asiento:
						</label>
					</div>

					<div className='myForms'>
						<select className='myOptions' name="sit" id="sit" form="buyTicket">
							{asientos.map((asiento, index) => (

								<option key={index} value={asiento}>{asiento}</option>
							))

							}
						</select>
					</div>
					<div className='commandFormBTN'>
						<div className='emptyBtn'>
							<p>Continuar</p>
						</div>
						<div className='emptyBtn'>
							<p>Reiniciar</p>
						</div>


					</div>
				</form>
			</section>
		</div>
	)
}
