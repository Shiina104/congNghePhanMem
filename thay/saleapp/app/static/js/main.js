function updateUI(data) {
    let items = document.getElementsByClassName("cart-counter");
        for (let item of items)
            item.innerText = data.total_quantity;

    let amounts = document.getElementsByClassName("cart-amount");
        for (let item of amounts)
            item.innerText = data.total_amount.toLocaleString();
}

function addToCart(id, name, price) {
    fetch("/api/carts", {
        method: "post",
        body: JSON.stringify({
            "id": id,
            "name": name,
            "price": price
        }),
        headers: {
            'Content-Type': "application/json"
        }
    }).then(res => res.json()).then(data => {
        updateUI(data);
    }) // promise
}

function updateCart(productId, obj) {
    fetch(`/api/carts/${productId}`, {
        method: 'put',
        body: JSON.stringify({
            'quantity': obj.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        updateUI(data);
    });
}

function deleteCart(productId) {
    if (confirm("Ban chac chan xoa khong?") === true) {
        fetch(`/api/carts/${productId}`, {
            method: 'delete',
        }).then(res => res.json()).then(data => {
            updateUI(data);
        });
    }
}