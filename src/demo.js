if(orderTotal({
    //can orderTotal sum these two items?
    items: [
        {name: 'Dragon Food', price: 350},
        {name: 'Chew Toy', price: 100}
    ]
}) !== 450) {
    throw new Error('sum test failed');
}

if(orderTotal({
    //can order total handle any arbitrary set of items?
    items: [
        {name: 'Dragon Food', price: 350},
        {name: 'Chew Toy', price: 200}
    ]
}) !== 550) {
    throw new Error('second sum test failed');
}

if(orderTotal({
    //can order total provide a 10% discount on all
    //order above 1,000
    items: [
        {name: 'Chew Toy', price: 200},
        {name: 'Dragon Food', price: 350 },
        {name: 'Massage Collar', price: 500}
    ]
}) !== 945) {
    throw new Error('discount test failed');
}

function orderTotal(order) {
    var total = order.items.reduce((accumulator, currentValue) => currentValue.price + accumulator, 0);
    var discount = 0;
    if(total > 1000) discount = total * 0.10;
    return total - discount;
}