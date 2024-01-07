//reduce -- To Do -- read more on reduce function
//reduce is used frequently in react
const m =[1,3,4];
let initialVal = 0;
let newM = m.reduce((accumulate,currVal)=>{
    console.log(`accumulate : ${accumulate} :  currVal : ${currVal}`);
    return accumulate+currVal;
},initialVal)

console.log(newM);

//count total price in shoppingCart
const shoppingCart = [
    {
        courese: "JS",
        price: 100
    },
    {
        courese: "React",
        price: 200
    },
    {
        courese: "Redux",
        price: 300
    }
]

let totalPrice = shoppingCart.reduce((total,item)=>{
return total+item.price
},0)
console.log(totalPrice);