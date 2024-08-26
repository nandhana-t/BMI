
	var age = document.getElementById('age')
	var weight = document.getElementById('weight')
	var height = document.getElementById('height')
	
	
	var resultarea = document.querySelector('.comment')
	function calculateBMI(){

		var bmi = weight.value / (height.value/100  *height.value/100)
		
		if (bmi < 18.5) {
		result = "Underweight";
	} else if (18.5<=bmi && bmi < 24.9) {
		result = "Normal weight";
	}else if (25<=bmi&& bmi<= 29.9) {
		result = "Overweight";
	} else if(30<=bmi && bmi<34.9){
		result = "Obese";
	}else if(35<=bmi){
		result='you are extremely obese';
	}
		resultarea.style.display='block '
		document.getElementById('result').innerHTML=bmi.toFixed(2)
		document.querySelector('.comment').innerHTML=result

		//speech

		const x = new
		SpeechSynthesisUtterance(result);
		window.speechSynthesis.speak(x);
	}


	
