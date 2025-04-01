const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const slcProducts = document.getElementById('productName');

function addOptElement(product) {
    let opt = document.createElement('option');
    opt.textContent = product.name;
    opt.value = product.id;
    slcProducts.appendChild(opt);
}

products.sort(function(productA, productB) {
    if (productA.name < productB.name)
        return -1;
    else
        return true;
});
products.forEach(addOptElement);