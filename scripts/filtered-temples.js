const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Belem Brazil Temple",
		location: "Belem, Para, Brasil",
		dedicated: "2022, November, 20",
		area: 28675,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
	},
	{
		templeName: "Fortaleza Brazil Temple",
		location: "Fortaleza, Ceara, Brazil",
		dedicated: "2019, June, 2",
		area: 25000,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/7-Fortaleza-Temple-Photo-2219768.jpg"
	},
	{
		templeName: "Campinas Brazil Temple",
		location: "Campinas, Sao Paulo, Brazil",
		dedicated: "2002, May, 17",
		area: 48100,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-morning-1029896-wallpaper.jpg"
	}
];

const containerElement = document.querySelector('.temple-cards');
const btnHome = document.getElementById('home');
const btnOld = document.getElementById('old');
const btnNew = document.getElementById('new');
const btnLarge = document.getElementById('large');
const btnSmall = document.getElementById('small');
const btnList = [btnHome, btnOld, btnNew, btnLarge, btnSmall]

// Create the card with the selected Temple information
function cardTemplate(temple) {
	containerElement.innerHTML +=
		`<div class="card">
			<h3>${temple.templeName}</h3>
			<dl>
				<dt class="location">Location: </dt>
				<dd>${temple.location}</dd>
				
				<dt>Dedicated: </dt>
				<dd>${temple.dedicated}</dd>

				<dt>Size: </dt>
				<dd>${temple.area} sq ft</dd>
			</dl>
			<figure>
				<img src="${temple.templeNumber}" alt="${temple.templeName} Image"
				loading="lazy">
			</figure>
		</div>`;
}

// Change de class atribute to apply css change to menu focus
function btnFocus(btnFocus) {
	btnList.forEach(btn => {
		btn.className = (btn.id === btnFocus.id) ? "active" : "";
	});
	containerElement.innerHTML = "";
}

temples.forEach(cardTemplate);

// Home menu button
btnHome.addEventListener('click', () => {
    btnFocus(btnHome);
	temples.forEach(cardTemplate);
});

// Old menu button
btnOld.addEventListener('click', () => {
    btnFocus(btnOld);
	let filteredTemple = temples.filter(temple => temple.dedicated.split(", ", 1) < 1900);
	filteredTemple.forEach(cardTemplate);
});

// New menu button
btnNew.addEventListener('click', () => {
    btnFocus(btnNew);
	let filteredTemple = temples.filter(temple => temple.dedicated.split(", ", 1) > 2000);
	filteredTemple.forEach(cardTemplate);
});

// Large menu button
btnLarge.addEventListener('click', () => {
    btnFocus(btnLarge);
	let filteredTemple = temples.filter(temple => temple.area > 90000);
	filteredTemple.forEach(cardTemplate);
});

// Small menu button
btnSmall.addEventListener('click', () => {
    btnFocus(btnSmall);
	let filteredTemple = temples.filter(temple => temple.area < 10000);
	filteredTemple.forEach(cardTemplate);
});
