import React from 'react'

export default function ShoppingForm() {
	return (
		<div className='buyTicketPage'>
			<header className='buyTicketHdr'>
				<h2>Comprar Ticket</h2>
				<p>Selecciona una funcion</p>

			</header>
			<section className="buyTichetSection">

				<form id='buyTicketForm'>


					<div className='formLabels'>
						<label for="movie">Seleccione pelicula:
						</label>
					</div>

					<div className='myForms'>
						<select className='myOptions' name="movie" id="movie" form="buyTicket">
							<option className='myOptions' value="Avatar">Avatar</option>
						</select>
					</div>

					<div className='formLabels'>
						<label for="funcion">Seleccione funcion:
						</label>
					</div>

					<div className='myForms'>
						<select className="myOptions" name="" id="movie" form="buyTicket">
							<option className='myForms' value="Viernes">30/10/2023 14:00</option>
						</select>
					</div>

					<div className='formLabels'>
						<label for="funcion">Seleccione asiento:
						</label>
					</div>

					<div className='myForms'>
						<select className='myOptions' name="sit" id="sit" form="buyTicket">
							<option className='' value="21F">Fila 1 - Asinto 1</option>
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
