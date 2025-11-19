

let dark_mode_btn = document.querySelector('#dark_mode_btn');


let cartFromStorage = localStorage.getItem('cart');

let cart = {
}

if (cartFromStorage) {
	cart = JSON.parse(cartFromStorage)
updateDOM()
}

if (localStorage.getItem('darkMode') === 'true') {
   document.body.classList.add('dark_mode');
   dark_mode_btn.textContent = 'Light Mode';
}


function darkMode() {
	if (document.body.classList.contains('dark_mode')) {

		localStorage.setItem('darkMode', 'false')

		dark_mode_btn.textContent = 'Dark Mode'
	} else {

		localStorage.setItem('darkMode', 'true')

		dark_mode_btn.textContent = 'Light Mode'
	}
	document.body.classList.toggle('dark_mode');
}

// ------------------------------------------------------
// let cards = document.getElementsByClassName('card');
// console.log(cards);


// let articole = document.getElementsByTagName('article');
// console.log(articole);


// console.log(document.querySelector('article'));

// console.log(document.querySelectorAll('.card'));


let title_shop = document.querySelector('#title_shop')


title_shop.textContent = 'Добро пожаловать в наш шоу-рум-онлайн!'

let ex_paragraph = document.querySelector('#ex_paragraph')
ex_paragraph.innerHTML = '<b>Товары</b>, находящиеся в данный момент в шоу-руме'


let img_swing = document.querySelector('#img_swing')
console.log(img_swing.getAttribute('src'))
// ---------------------------------------------------------------
// modificarea atributelor
// img_swing.setAttribute('src', 'media/img/изображение_viber_2025-09-25_14-19-51-025.jpg');

// functie butonul care schimba img
// function changeImage() {
// img_swing.setAttribute('src', 'media/img/изображение_viber_2025-09-25_14-19-51-025.jpg');

// }

// modificarea stilurilor

let change_img_btn = document.querySelector('#change_img_btn');

change_img_btn.classList.add('change_img_btn');
// adauga clasa

change_img_btn.classList.remove('change_img_btn');
// sterge clasa


// functie care adauga clasa

// function darkMode() {
// 	document.body.classList.add('dark_mode');
// }                         .toggle

// darkMode();


// functie care adauga si scoate clasa daca e prezenta
// toggle




// -------------------------------:----------------------------------------
// INSERAREA ELEMENTELOR IN HTML:
// -----------------------------------------------------------

let produse = [
		{
		name: 'Металлический стеллаж',
		image: 'media/img/изображение_viber_2025-09-25_14-36-11-601.jpg',
		price: 8999
	},
		{
		name: 'Металлическая лавка с кофе-подставкой',
		image: '/media/img/изображение_viber_2025-11-16_10-06-29-242.jpg',
		price: 6990
	},
		{
		name: 'Металлическая лавка',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-025.jpg',
		price: 5999
	},
		{
		name: 'Металлические ворота',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-164.jpg',
		price: 16999
	},
		{
		name: 'Металлические качели',
		image: '/media/img/изображение_viber_2025-09-25_14-19-50-995.jpg',
		price: 10999
	},
	{
		name: 'Металлический барбекю на колёсах',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-076.jpg',
		price: 12990
	},
	{
		name: 'Металлический барбекю с инициалами',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-133.jpg',
		price: 8990
	},
	{
		name: 'Металлический барбекю в стиле лофт',
		image: '/media/img/изображение_viber_2025-09-25_14-19-51-278.jpg',
		price: 10990
	},
]

// let img_card = document.createElement('img');
// console.log(img_card);

// img_card.setAttribute('src', 'media/img/изображение_viber_2025-09-25_14-36-11-601.jpg');
// img_card.setAttribute('alt', 'rack');
// img_card.classList.add('img_card_style');


// let sectiune = document.querySelector('.exemple_insert');
// sectiune.insertAdjacentElement('afterbegin', img_card);
// ---------------------------------------------
// crearea unui div in js
// let div_imagine = document.createElement('div');
// div_imagine.classList.add('image_container');

// console.log(div_imagine);

// div_imagine.insertAdjacentElement('afterbegin', img_card);
// console.log(div_imagine);

// ------------------------------------------------------
// crearea unui card
// 1.article
// let article = document.createElement('article');
// article.classList.add('card');
// // 2.h3
// let h3 = document.createElement('h3');
// h3.textContent = produs.name;
// // 3. plasam h3 in interiorul articolului
// article.insertAdjacentElement('beforeend', h3);

// let div_imagine = document.createElement('div');
// div_imagine.classList.add('image_container');
// div_imagine.insertAdjacentElement('afterbegin', img_card);
// // (img_card este creat mai sus)
// // 4. plasam imaginea in interiorul articolului
// article.insertAdjacentElement('beforeend', div_imagine);
// // 5. h5
// let h5 = document.createElement('h5');
// h5.classList.add('price_product');
// h5.textContent = 8999 + "MDL";
// // 6. plasam h5 in interiorul articolului
// article.insertAdjacentElement('beforeend', h5);
// // 7. buton
// let button = document.createElement('button');
// button.classList.add('buy_button');
// button.textContent = "Заказать"
// // 8. plasam buttonul in interiorul articolului
// article.insertAdjacentElement('beforeend', button);

// console.log(article);

// // 9. inserarea cardului in pagina(sectiune)
// let contain = document.querySelector('.contain');
// contain.insertAdjacentElement('beforeend', article);
// ------------------------------------------------------------------------------
// functia de iteratia printr-o lista
function createProductCard(produs) {
	let article = document.createElement('article');
   let h3 = document.createElement('h3');
   let img_card = document.createElement('img');
   let div_imagine = document.createElement('div');
   let h5 = document.createElement('h5');
   let button = document.createElement('button');
	
article.classList.add('card');
img_card.classList.add('img_card_style');
div_imagine.classList.add('image_container');
h5.classList.add('price_product')
button.classList.add('buy_button')

h3.textContent = produs.name
h5.textContent = produs.price + "MDL"
button.textContent = "Заказать"

img_card.setAttribute('src', produs.image);
img_card.setAttribute('alt', 'rack');

button.addEventListener('click', () => {
	addProduct(produs.name, produs.price, produs.image)
})

div_imagine.insertAdjacentElement('afterbegin', img_card)
article.insertAdjacentElement('beforeend', h3);
article.insertAdjacentElement('beforeend', div_imagine)
article.insertAdjacentElement('beforeend', h5);
article.insertAdjacentElement('beforeend', button)

return article

}

let contain = document.querySelector('.contain');

for (const produs of produse) {
let card = createProductCard(produs)

contain.insertAdjacentElement('beforeend', card)
}

// -----------------------------------------------
// shopping cart - popup
let cartImage = document.querySelector('.shoppingCart img');
let cartContent = document.querySelector('.cartContent');
      cartImage.addEventListener('mouseover', () => {
      cartContent.classList.add('cartContentVisible')

		// let shoppingCart = document.querySelector('shoppingCart');
		let nav = document.querySelector('nav');

		cartContent.addEventListener('mouseleave', () => {
      cartContent.classList.remove('cartContentVisible')
		})
		nav.addEventListener('mouseleave', () => {
      cartContent.classList.remove('cartContentVisible')
		})
})
// -----------------------------------------------
function addProduct(product, price, image){
	if (cart[product] != null) {
		cart[product].quantity++;
	} else {
		cart[product] = {}
		cart[product].quantity = 1
		cart[product].price = price;
		cart[product].image = image;

	}
	console.log(cart)
	updateDOM()
}

function deleteProduct(product) {
   if (cart[product].quantity > 1) {
		cart[product].quantity--;
	} else {
      delete cart[product];
	}

	updateDOM() 
}



function updateDOM () {
   let cartList = document.querySelector('.cartContent');
	cartList.innerHTML = "";

	let totalPrice = 0

	for (let product in cart) {
		let listItem = document.createElement('li');
		listItem.classList.add('shoppingCartElement')

		let productImage = document.createElement('img')
		productImage.setAttribute('src', cart[product].image);
		productImage.classList.add('.cartElementImage')

		listItem.textContent = product + ": " + cart[product].quantity + " unitati";
      
		let totalProductPrice = cart[product].price * cart[product].quantity;
		listItem.textContent += ". " + totalProductPrice + " lei. "

		let removeButton = document.createElement('button');
		removeButton.textContent = 'Удалить одну единицу';

		removeButton.addEventListener('click', () => {
			deleteProduct(product)
		})

		listItem.insertAdjacentElement('beforeend', productImage)
		listItem.insertAdjacentElement('beforeend', removeButton);
		cartList.insertAdjacentElement('beforeend', listItem)

		totalPrice += totalProductPrice
	}

	let price = document.querySelector(".price");
	price.textContent = "Итоговая сумма: " + totalPrice + " lei."


	localStorage.setItem('cart', JSON.stringify(cart))
}


// ====================================================================
// STORAGE - spatiu de stocare inform care se foloseste pentru functionalitatilor de preferinte
// LOCALSTORAGE - stocarea datelor subforma de variabile

// setarea unei valori - .setItem
// localStorage.setItem('limba','engleza')

// preluarea unei valori - .getItem
// console.log(localStorage.getItem('limba'));

// localStorage se scrie la inceputul paginii

// localStorage.setItem('darkMode', 'true');
// localStorage.getItem('darkMode');


// let dark_mode_btn = document.querySelector('#dark_mode_btn');

// if (localStorage.getItem('darkMode') === 'true') {
// 	document.body.classList.toggle('darkMode');
// 	dark_mode_btn.textContent = 'Light Mode';
// }

// localStorage.removeItem('limba');

// sessionStorage.setItem('temporar', 'Lia');

// document.cookie = "yummy_cookie=chokolate";

// ----------------------------------------------------------
// Arrow functions
// function greetUser(nume) {
// 	return 'Hello ' + nume;
// }

// let greetUser2 = nume => 'Hello ' + nume

// console.log(greetUser('Lia'));
// console.log(greetUser2('Lia'));

// -------------------------------------------------------------
// EVENIMENTE
// document.addEventListener('click');

let card = document.querySelector('.card');

card.addEventListener('click', function() {
	alert('Card apasat')
});
// ------------------------------------------------------------
let contact_email = document.querySelector('#contact_email');
let text_email = document.querySelector('#text_email');

// contact_email.addEventListener('input', function() {
//    text_email.textContent = contact_email.value
// })

contact_email.addEventListener('input', () => text_email.textContent = contact_email.value.length + " caractere")

// window.addEventListener('mousemove', () => console.log('Mouse miscat'))
// window.addEventListener('mousemove', (event) => console.log(event))
let mouse_info = document.querySelector('#mouse_info');
let menu = document.querySelector('.menu')

window.addEventListener('mousemove', (event) => {
   mouse_info.textContent = "X: " + event.x + " y: " + event.y

   if (event.x < 20) {
		menu.classList.add('menu_activ')
	}
	if (event.x > 300) {
		menu.classList.remove('menu_activ')
	}
})

let form_contact = document.querySelector('.form_contact');

form_contact.addEventListener('submit', (event) => {
	event.preventDefault();

	setTimeout(() => {
		alert('Запрос отправлен!')
	}, 3000)
});



// shopping Cart Functionality

