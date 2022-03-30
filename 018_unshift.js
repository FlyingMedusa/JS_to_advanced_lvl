function gross(vat, ...prices) {
    prices.unshift(vat);
    console.log(prices);
}

gross(23, 100, 5, 15, 21);