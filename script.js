let cart = 0;
let total = 0;

function addToCart(productName, price) {

    cart++;
    total += price;

    document.getElementById("cart-count").innerText = cart;
    document.getElementById("total-price").innerText = total;

    let li = document.createElement("li");
    li.innerText = productName;

    document.getElementById("cart-items").appendChild(li);
}

function searchProduct() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let item = card.querySelector("h2").innerText.toLowerCase();

        if(item.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}