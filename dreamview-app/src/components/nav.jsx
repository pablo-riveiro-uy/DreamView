import React from 'react'
import logo from '../assets/logo-dreamview.png';



export default function Nav() {
	return (
		<div className='nav'>
			<img className="logoHome" src={logo} />

			<div className='navOptions'>
				<div className='navOptBtn'>
					<a href='#destacados'>Destacados</a></div>
				<div className='navOptBtn'>
					<a href='#cartelera'>Cartelera</a>
				</div>
				<div className='navBtn'>
					<a href='#comprar'>Comprar Ticket</a>
				</div>
			</div>
		</div>
	)
}
