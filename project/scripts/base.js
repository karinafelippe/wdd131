const foods = [
	{
		name: "carne",
		type: "entrees",
		description: "Espeto de carne. Aproximadamente 90g.",
		price: 10,
        weight: 90,
		imageUrl: "images/espeto_carne.webp"
	},
    {
		name: "frango",
		type: "entrees",
		description: "Espeto de frango. Aproximadamente 90g.",
		price: 9,
        weight: 90,
		imageUrl: "images/espeto_frango.webp"
	},
    {
		name: "suino",
		type: "entrees",
		description: "Espeto de suino. Aproximadamente 90g.",
		price: 9,
        weight: 70,
		imageUrl: "images/espeto_suino.webp"
	},
    {
		name: "queijo",
		type: "aperitives",
		description: "Espeto de queijo. Aproximadamente 90g.",
		price: 9,
        weight: 80,
		imageUrl: "images/espeto_queijo.webp"
	},
    {
		name: "batata",
		type: "aperitives",
		description: "Espeto de batata. Aproximadamente 90g.",
		price: 9,
        weight: 90,
		imageUrl: "images/espeto_batata.webp"
	}
]
const containerElement = document.querySelector('.food-cards');
const formElement = document.querySelector('.contact-form');
const btnAll = document.getElementById("all");
const btnAperitives = document.getElementById("aperitives");
const btnEntrees = document.getElementById("entrees");
const btnContact = document.getElementById("contact");
const btnList = [btnAll, btnAperitives, btnEntrees, btnContact]

function cardTemplate(food) {
    let foodName = food.name[0].toUpperCase() + food.name.substring(1);
	containerElement.innerHTML +=
		`<div class="food-card">
            <div class="card-text">
                <h2>${foodName}</h2>
                <p>Espeto de ${food.name.toLowerCase()}. Aproximadamente ${food.weight}g.</p>
                <p>R$ ${food.price.toFixed(2)}</p>
            </div>
            <img src="${food.imageUrl}" alt="" srcset="">
        </div>`;
}

function btnFocus(btnFocus) {
	btnList.forEach(btn => {
		btn.className = (btn.id === btnFocus.id) ? "active" : "";
	});
	containerElement.innerHTML = "";
}

btnFocus(btnAll);
foods.forEach(cardTemplate);
containerElement.style.display = "block";
formElement.style.display = "none";

// Menu events
btnAll.addEventListener('click', () => {
	btnFocus(btnAll);
    containerElement.style.display = "block";
    formElement.style.display = "none";
	foods.forEach(cardTemplate);
});
btnAperitives.addEventListener('click', () => {
	btnFocus(btnAperitives);
    containerElement.style.display = "block";
    formElement.style.display = "none";
    let filteredFoods = foods.filter(food => food.type == "aperitives");
	filteredFoods.forEach(cardTemplate);
});
btnEntrees.addEventListener('click', () => {
	btnFocus(btnEntrees);
    containerElement.style.display = "block";
    formElement.style.display = "none";
    let filteredFoods = foods.filter(food => food.type == "entrees");
	filteredFoods.forEach(cardTemplate);
});
btnContact.addEventListener("click", (e) => {
    e.preventDefault();
    btnFocus(btnContact);
    containerElement.style.display = "none";
    formElement.style.display = "block";

    const formHTML = `
        <form action="contact-sent.html" class="contact-form">
            <h2>Contato</h2>
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Mensagem:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Enviar</button>
        </form>
    `;

    // Limpa conteúdo anterior e adiciona o form
    formElement.innerHTML = formHTML;
});