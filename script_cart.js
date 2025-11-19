

let cartFromStorage = localStorage.getItem('cart');

cart = {}


if (cartFromStorage) {
	cart = JSON.parse(cartFromStorage)
}

updateDOM()


function addProduct(product, price){
	if (cart[product] != null) {
		cart[product].quantity++;
	} else {
		cart[product] = {}
		cart[product].quantity = 1
		cart[product].price = price;
	}

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
   let cartList = document.querySelector('.shoppingCart');
	cartList.innerHTML = "";

	let totalPrice = 0

	for (let product in cart) {
		let listItem = document.createElement('li');
		listItem.textContent = product + ": " + cart[product].quantity + "unitati";
      
		let totalProductPrice = cart[product].price * cart[product].quantity;
		listItem.textContent += ". " + totalProductPrice + " lei. "

		let removeButton = document.createElement('button');
		removeButton.textContent = 'Удалить одну единицу';

		removeButton.addEventListener('click', () => {
			deleteProduct(product)
		})

		listItem.insertAdjacentElement('beforeend', removeButton);
		cartList.insertAdjacentElement('beforeend', listItem)

		totalPrice += totalProductPrice
	}

	let price = document.querySelector(".price");
	price.textContent = "Итоговая сумма: " + totalPrice + " lei."


	localStorage.setItem('cart', JSON.stringify(cart))
}



function resetCart() {
	cart = {}

	updateDOM();
}