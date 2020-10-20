//funtion to select elements
const selectElement = (s) => document.querySelector(s);

//open navbar on click
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active')
})

//close navbar on click
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active')
})