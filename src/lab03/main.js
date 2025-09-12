let product1 = {
    "name" : "TIVI",
    "price" : 5000,
    "inStock" : true
}
let product2 = {
    "name" : "Maygiac",
    "price" : 15000,
    "inStock" : false
}
let product3 = {
    "name" : "TuLanh",
    "price" : 25000,
    "inStock" : true
}
const products = [product1,product2,product3]
console.log(products[0].name)
products[1].price = 150
let product4 = {
    "name" : "PC",
    "price" : 25000,
    "inStock" : true
}
products.push(product4)
// for(let i=0;i<products.length;i++)
// {
//     console.log(`
//         Ten san pham : ${products[i].name }
//         Gia san pham ${products[i].price}
//         Tinh trang hang ${products[i].inStock}`)
// }
products.forEach(function(value,index){
    console.log(`
        Ten san pham la ${value.name}
        `)
})
const prices = products.map(function(value,index)
{
    return value.price
})
console.log(prices)
const productInStock = products.filter(function(value,index)
{
    return value.inStock === true
})
console.log(productInStock)