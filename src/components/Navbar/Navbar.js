import React from 'react';

function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav className="blue">
			<div className="nav-wrapper container">
				<a style={{cursor: 'pointer'}}className='left' onClick={() => 
					{document.getElementsByClassName('instructionsModal')[0].classList.remove('hide');
				}}>Instructions</a>
				<a href="/" className='brand-logo center'>React Click Game</a>
				<ul className='right'>
					<li style={{paddingRight: "20px"}}>Score: {props.score}</li>
					<li style={{paddingLeft: "20px"}}>High Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	)
}



export default Navbar;








