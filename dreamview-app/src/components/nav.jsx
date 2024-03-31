import React from 'react'
import logo from '../assets/logo-dreamview.png';



export default function Nav() {
	return (
		<div className='nav'>
			<img className="logoHome" src={logo} />

			<div className='navOptions'>
				<div className='navOptBtn ocultar-div'>
					<a href='#destacados'>Destacados</a></div>
				<div className='navOptBtn ocultar-div'>
					<a href='#cartelera'>Cartelera</a>
				</div>
				<div className='navBtn ocultar-div '>
					<a href='#comprar'>Comprar Ticket</a>
				</div>
			</div>
			<dic className="mobil-buyTicket oculta-div-on-desktop">
				<div className='icons'>
					<a href="#comprar">

						<p className='material-symbols-outlined'>local_activity</p>
					</a>
				</div>
			</dic>
		</div>
	)
}
