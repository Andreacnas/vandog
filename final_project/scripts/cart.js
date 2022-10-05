let cart = [
    ['./images/vv_in_orange.jpg', 'Vincent Van-Dog in Orange Shirt Poster', 8, 'poster'],
    ['./images/vv_in_pink_card.jpg', 'Vincent Van-Dog in Orange Shirt Card', 3.5, 'card'],
    ['./images/vv_in_yellow_nb.jpg', 'Vincent Van-Dog in Orange Shirt Notebook', 10.5, 'nb'],
    ['./images/vv_life_kc.jpg', 'Vincent Van-Dog in Orange Shirt Key Chain', 2.99, 'kc']
]

window.onload = function() {
    updateCart();
}

// show cart items
function updateCart() {
    let i = 0;
    let display = '<p>Note: select items to checkout.</p><br>';
    cart.forEach((item) => {
        let input = '<input type="checkbox" id="cart' + i + '" name="cart' + i + '" value="' + item[1] + '" class="all-cart-items" onclick="calculation()">';
        let label = '<label for="cart' + i + '">' + item[1] + ' | CAD $' + item[2].toFixed(2) + '</label><br>';
        let img = '<img src="' + item[0] + '" alt="' + item[1] + '" class="' + item[3] + '-size"><br>';
        let minusBtn = '<button type="button" class="minus" name="minus" value="Minus One" onclick="minusOne(\'' + item[3] + '_number\')">-</button>';
        let number = '<input type="number" id="' + item[3] + '_number" name="' + item[3] + '_number" min="0" value="1" class="product_number">';
        let plusBtn = '<button type="button" class="plus" name="plus" value="Plus One" onclick="plusOne(\'' + item[3] + '_number\')">+</button><br class="hide-br">';
        let deleteBtn = '<button type="button" class="delete" name="delete" value="Delete item" onclick="deleteItem(\'' + item[1] + '\')">delete item</button><br><br>';
        display += '<div>' + input + label + img + '<section>' + minusBtn + number + plusBtn + deleteBtn + '</section></div>';
        i += 1;
    });
    document.querySelector('#cart-product').innerHTML = display;
}

// delete cart items
function deleteItem(item) {
    let index = -999;
    var i = 0;
    for (i = 0; i < cart.length; i++) {
        if (cart[i][1] == item) {
            index = i;
            break;
        } 
    }
    if (index >= 0) {
        cart.splice(index, 1);
        updateCart();
    }
}

// select/unselect items
function checkAll() {
    var result = document.getElementById("check-all").checked ? true : false;
    var label = (result == true) ? 'Unselect all items' : 'Select all items';
    var items = document.querySelectorAll('.all-cart-items');
    for (var i = 0; i < items.length; i++) {
        items[i].checked = result;
    }
    document.getElementById('check-all-label').innerHTML = label;
    calculation();
}

// calculate total price
function calculation() {
    var subtotal = 0;
    var total_number = 0;
    var items = document.querySelectorAll('.all-cart-items');
    // iterate each checkbox
    items.forEach((item) => {
        if (item.checked) {
            single : {
                for (var i = 0; i < cart.length; i++) {
                    if (item.value == cart[i][1]) {
                        let id = cart[i][3] + "_number";
                        let number = document.getElementById(id).value;
                        let price = cart[i][2];
                        subtotal += number * price;
                        total_number += parseInt(number);
                        break single;
                    }
                }
            }
        }
    });
    var tax = subtotal * 0.13;
    var total = tax + subtotal;
    document.getElementById('subtotal').innerHTML='Subtotal (' + total_number + ' items): CAD $' + subtotal.toFixed(2)
                                            + '<br>GST/HST: CAD $' + tax.toFixed(2)
                                            + '<br>Total: CAD $' + total.toFixed(2);
}
