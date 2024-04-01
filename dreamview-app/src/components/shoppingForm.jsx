import React, { useState, useEffect } from 'react';
import Notification from './notification';
import bigTicket from "../assets/ticket.png"

export default function ShoppingForm({ movies, selected }) {

	// estado  para las validaciones

	let [validacion, setValidacion] = useState({
		allFieldsCheck: false,
		nameMinCheck: false,
		validMailCheck: false,
		telCheck: false
	})
	const [currentStep, setCurrentStep] = useState(1);

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


	// estado para formulario de datos personales

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		telefono: ''
	})

	const [formFuncionData, setFormFuncionData] = useState({
		movie: '',
		funcion: '',
		asiento: ''
	})

	// estados para la visualizacion de notificaciones

	const [warnNombre, setWanrnNombre] = useState('hidden')
	const [warnMail, setwarnMail] = useState('hidden')
	const [warnTelefono, setWarnTelefono] = useState('hidden')
	const [warnSistem, setWarnSistem] = useState('hidden')

	// estados para lso mensajes de las notificaciones 

	const [mesageNombre, setMessageNombre] = useState('')
	const [messageEmail, setMessageEmail] = useState('')
	const [messageTelefono, setMessageTelefono] = useState('')
	const [messageSistem, setMessageSistem] = useState('')

	const cleanNotifications = () => {
		setTimeout(() => {
			setWarnSistem('hidden')
			setWanrnNombre('hidden')
			setwarnMail('hidden')
			setWarnTelefono('hidden')
		}, 5000);
	}

	// regExpression para validar el mail

	let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;



	// recoge el contenido de los inputs

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === 'telefono') {
			// Eliminar guiones existentes para evitar duplicados
			const formattedValue = value.replace(/-/g, '');
			// Agregar guiones en la cuarta y octava posición
			let newValue = formattedValue;
			if (formattedValue.length > 3) {
				newValue = formattedValue.slice(0, 3) + '-' + formattedValue.slice(3);
			}
			if (formattedValue.length > 6) {
				newValue = newValue.slice(0, 7) + '-' + newValue.slice(7);
			}
			// Actualizar el valor del input
			event.target.value = newValue;
		}
		// Actualizar el estado formData
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	}

	// manejador para el boton continuar y volver

	const handleContinuar = () => {
		console.log(formFuncionData)
		setCurrentStep(2); // Cambiar al siguiente paso del formulario
	}

	const handleVolver = () => {
		setCurrentStep(1);  // vuelve al paso anterior
	}


	const handleFuncionOnchange = (event) => {
		const { name, value } = event.target;

		// Actualizar el estado formData
		setFormFuncionData((prevFormData) => ({ ...prevFormData, [name]: value }));
		console.log(formFuncionData)

	}
	const handleReiniciar = () => {
		setFormFuncionData({
			movie: '',
			funcion: '',
			asiento: ''
		})
		let formulario = document.getElementById('funcionForm');
		formulario.reset()

		console.log('reicinando formulario funcion', formFuncionData)

	}

	// submit de form de datos personales 

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData)

		// validaciones 

		if (formData.name === '' || formData.email === '' || formData.telefono === '') {
			setWarnSistem('vivible')
			setMessageSistem('Debes llenar todos los datos')
			setValidacion({ allFieldsCheck: false })
			cleanNotifications()
		} else {
			setValidacion({ allFieldsCheck: true })

		}
		if (formData.name.length < 4) {
			setValidacion({ nameMinCheck: false })
			setWanrnNombre('vivible')
			setMessageNombre('El nombre debe tener al menos 4 caracteres')
			cleanNotifications()
		} else {
			setValidacion({ nameMinCheck: true })

		}
		if (!validEmail.test(formData.email)) {
			setwarnMail('visible')
			setMessageEmail('Ingese un mail válido')
			setValidacion({ validMailCheck: false })
			cleanNotifications()
		} else {
			setValidacion({ validMailCheck: true })
		}

		if (formData.telefono.length < 9) {
			setWarnTelefono('visible')
			setMessageTelefono('Ingrese un teléfono válido')

			setValidacion({ telCheck: false })
			cleanNotifications()
		} else {
			setValidacion({ telCheck: true })
		}

		if (validacion.allFieldsCheck && validacion.nameMinCheck && validacion.validMailCheck, validacion.telCheck) {
			setCurrentStep(3);
		}


	}






	return (
		<>{currentStep === 1 && (
			<>
				<section className='personal-info-form-page'>

					<header className='buyTicketHdr'>
						<h2>Comprar Ticket</h2>
						<p>Selecciona una función</p>
					</header>
					<section className="buyTichetSection">
						<form id='funcionForm' >
							<div className='formLabels'>
								<label for="movie">Seleccione película:</label>
							</div>
							<div className='myForms'>
								<select className='myOptions' name="movie" id="movie" form="buyTicket" onChange={handleFuncionOnchange}>
									{selected ? <option value={selected}>{selected}</option> :
										movies ? movies.map((movie, index) => (
											<option key={index} value={selected ? selected : movie.Title} >{movie.Title}</option>
										)) : 'No Movies'}
								</select>
							</div>

							<div className='formLabels'>
								<label for="funcion">Seleccione funcion:
								</label>
							</div>

							<div className='myForms'>
								<select className="myOptions" name="funcion" id="funcion" form="buyTicket" onChange={handleFuncionOnchange}>
									{funciones.map((funcion, index) => (
										<option key={index} value={funcion} >{funcion}</option>
									))}
								</select>
							</div>

							<div className='formLabels'>
								<label for="funcion">Seleccione asiento:
								</label>
							</div>

							<div className='myForms'>
								<select className='myOptions' name="asiento" id="asiento" form="buyTicket" onChange={handleFuncionOnchange}>
									{asientos.map((asiento, index) => (

										<option key={index} value={asiento} >{asiento}</option>
									))

									}
								</select>
							</div>
							<div className='commandFormBTN'>
								<div className='emptyBtn' onClick={handleContinuar}>
									<p>Continuar</p>
								</div>
								<div className='emptyBtn' onClick={handleReiniciar}>
									<p>Reiniciar</p>
								</div>

							</div>
						</form>
					</section>
				</section>
			</>

		)}
			{currentStep === 2 && (

				<section className='personal-info-form-page'>
					<header className='buyTicketHdr'>
						<h2>Comprar Ticket</h2>
						<p>Selecciona una función</p>
					</header>
					<section className='buyTichetSection'>
						<form>
							<div>
								<label className='formLabels' For="name">Nombre completo</label>
							</div>
							<div className='myForms'>
								<input className="myInputs" type='text' name='name' onChange={handleChange}></input>

							</div>
							<Notification visualization={warnNombre} message={mesageNombre} />
							<div>
								<label className='formLabels' For="email">Email</label>
							</div>
							<div className='myForms'>
								<input className="myInputs" type='email' name='email' onChange={handleChange}></input>
							</div>
							<Notification visualization={warnMail} message={messageEmail} />
							<div>
								<label className='formLabels' For="telefono">Telefono</label>
							</div>
							<div className='myForms'>
								<input className="myInputs" type='text' name='telefono' placeholder='  -   -   ' onChange={handleChange}></input>
							</div>
							<Notification visualization={warnTelefono} message={messageTelefono} />
							<Notification visualization={warnSistem} message={messageSistem} />
							<div className='commandFormBTN'>
								<div className='finalFormBTN' onClick={handleSubmit}>Finalizar</div>
								<div className='emptyBtn' onClick={handleVolver}>Volver</div>
							</div>
						</form>

					</section>
				</section>

			)}
			{currentStep === 3 && (


				<section className='personal-info-form-page'>

					<section className='buyTichetSection'>
						<h3>
							Comprar Ticket
						</h3>
						<h2>
							¡ Felicitaciones {formData.name} !
						</h2>
						<img src={bigTicket} alt='ticket illustration' />
						<h3>Tu funcion {formFuncionData.funcion.slice(0, -5)} a las {formFuncionData.funcion.slice(-5)} </h3>
						<h4>Te esperamos</h4>
					</section>
				</section>

			)}


		</>
	)
}
