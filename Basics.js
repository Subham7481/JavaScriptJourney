const myNumbers = [1,2,3];

const result = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num >= 40)
console.log(result);

//Reduce
// const myTotal = myNumbers.reduce(function (acc, curvalue) {
//     console.log(`acc: ${acc} and curvalue: ${curvalue}`)
//     return acc + curvalue;
// }, 0);

const myTotal = myNumbers.reduce( (acc, currvalue) => acc + currvalue, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JavaScript",
        price: 299,
    },

    {
        itemName: "Java",
        price: 999,
    },

    {
        itemName: "Mobile Development",
        price: 5999,
    },
]

const payPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(payPrice);