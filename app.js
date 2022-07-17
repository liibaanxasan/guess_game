let winAudio = new Audio('win.mp3');
let faildAudio = new Audio('fail.mp3');
let nearFail = new Audio('nearFail.mp3');
let count = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let checkNumber = document.querySelector('.check')
checkNumber.addEventListener('click', function(){
	// nearFail.play();
	count++;
	let guesNumber = Number(document.querySelector('.guess').value);

	if(!guesNumber){
		document.querySelector('.message').textContent = "⛔ Not Number"
	}
	else if(count ===5 & guesNumber === secretNumber) {
		document.querySelector('.number').textContent = 'corrrect';
		winAudio.play()
		document.querySelector('.number').textContent = secretNumber;
		checkNumber.disabled = true;
		document.querySelector('body').style.backgroundColor = 'green';
		document.querySelector('.number').style.with = '30rem';
	}
	else if(count ===5 && guesNumber !== secretNumber){
		faildAudio.play();
		checkNumber.disabled = true;
		document.querySelector('.guess').value = "";
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = 'red';
		document.querySelector('body').style.color = 'white'
		return(document.querySelector(".message").innerHTML = 
		"<h4>try again</h4>")

	}
	











	else if(guesNumber != secretNumber){
		document.querySelector('.message').textContent = guesNumber > secretNumber ? 'too high'
		: 'too law';
		document.querySelector('.guess').value = '';
	}
	// else if(guesNumber !== secretNumber){
	// 	if(count == 1){
	// 		nearFail.play();
	// 	}
	// }
})
