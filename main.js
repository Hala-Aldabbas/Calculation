
var calc = document.querySelectorAll('#calculator button');
var operators = ['+', '-', 'x', '/'];


for(var i = 0; i < calc.length; i++) {
	calc[i].onclick = function(e) {
	
		var input = document.querySelector('.screen');
		var  inputValue = input.innerHTML;
		var   buttonValue = this.innerHTML;
		

		if(  buttonValue == 'C') {
			input.innerHTML = '';
		}
		

		else if(  buttonValue == '=') {
			var equation =  inputValue;
			var lastChar = equation[equation.length - 1];
		
			if(equation)
				input.innerHTML = eval(equation);
		}

		else if(operators.indexOf(  buttonValue) > -1) {

			var lastChar =  inputValue[ inputValue.length - 1];
			
			
			if( inputValue != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML +=   buttonValue;
			
			else if( inputValue == '' &&   buttonValue == '-') 
				input.innerHTML +=   buttonValue;
		
		}
		else {
			input.innerHTML +=   buttonValue;
		}
	} 
}