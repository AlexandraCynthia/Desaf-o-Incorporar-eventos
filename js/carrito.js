

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addtoCartButton => {
addtoCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

//creando funcion addTocarTClicked

function addToCartClicked(event){
	const button = event.target;
	const item = button.closest(".item");
	
	const itemTitle = item.querySelector('.item-title').textContent;
	const itemPrice = item.querySelector('.item-price').textContent;
	const itemImage = item.querySelector('.item-image').src;
	
	addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage){
	const shoppingCartRow = document.createElement('div');
	const shoppingCartContent = 
	`<div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    updateShoppingCartTotal();
	}
	
	function updateShoppingCartTotal(){
		let total =0;
		const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
		const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

		shoppingCartItems.forEach((shoppingCartItem)=>{
			const shoppingCartItemPriceElement=shoppingCartItem.querySelector('.shoppingCartItemPrice');
			const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace ('S/',''));
			const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
			const shoppingCartItemQuantity=Number(shoppingCartItemQuantityElement.value);

			total = total + shoppingCartItemPrice*shoppingCartItemQuantity;
			});
			shoppingCartTotal.innerHTML = `S/${total}`
	}








