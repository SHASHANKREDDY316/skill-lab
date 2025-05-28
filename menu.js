function bill() {
    const prices = {
        idli: 20,
        dosa: 40,
        uggani: 30,
        pongal: 40,
        poori: 50,
        vada: 20
    };

    let total = 0;

    for (let item in prices) {
        const quantity = parseInt(document.getElementById(item).value) || 0;
        total += prices[item] * quantity;
    }

    document.getElementById("res").innerText = "Total Bill: ₹" + total;
}
