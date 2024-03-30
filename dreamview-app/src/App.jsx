import React, { useState, useEffect } from 'react';
import Cartelera from './components/cartelera';
import Nav from './components/nav';

const App = () => {




	return (
		<>
			<Nav />
			<nav>DreamView</nav>
			<article>spotmovies</article>
			<Cartelera />
			<article>shopping form</article>
			<article>message form</article>
			<article>succes message</article>
		</>
	);
};

export default App;