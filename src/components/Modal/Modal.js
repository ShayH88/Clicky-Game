import React from 'react';
import './Modal.css';



function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">How to Play</h4>
				<ol>
					<li>Click on a card to start.</li>
					<li>If you click on the same card twice, you Lose!</li>
					<li>Try to click every card without repeating to win the game</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>Start Game</a>
			</div>	
		</div>
	)
}





export default Modal;