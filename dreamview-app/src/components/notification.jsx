import React from 'react'

export default function Notification({ visualization, message }) {
	return (
		<div className={visualization}>
			<p className='message'>{message}</p>
		</div>
	)
}
