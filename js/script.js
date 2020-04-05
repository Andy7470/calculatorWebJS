
function getValue(number){
	document.getElementById('display').value += number
}

function resolve(){
    var result = document.getElementById('display').value
	var solve = document.getElementById('display').value = eval(result)

	return solve;
	console.log(solve)
}

function clearDisplay(){
	console.log("clear")
	document.getElementById('display').value = ""
}

function root(){
	document.getElementById('display').value = Math.sqrt(resolve())
}

