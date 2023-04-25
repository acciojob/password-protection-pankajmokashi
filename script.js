//your JS code here. If required.
let input = document.querySelector("input")

function display(){
	let n = input.value.length
	let str = ""
	for(let i = 0; i < n; i++){
		str = str + "*"
	}
	input.value = str
}
input.addEventListener("keyup", display)