document.addEventListener('DOMContentLoaded', e => {
	let loadscreen = document.querySelector('#loading')
	loadscreen.querySelector("span").innerHTML = "C'est bon"
	loadscreen.classList.add("loaded")
})