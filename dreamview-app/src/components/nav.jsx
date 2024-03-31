import React from 'react'
import logo from '../assets/logo-dreamview.png';

export default function Nav() {
	return (
		<div className='nav'>
			<img className="logoHome" src={logo} />

			<div className='navOptions'>
				<div className='navOptBtn'>Destacados</div>
				<div className='navOptBtn'>Cartelera</div>
				<div className='navBtn'>Comprar Ticket</div>
			</div>
		</div>
	)
}
