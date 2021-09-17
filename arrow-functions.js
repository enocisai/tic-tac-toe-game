/// 1
const sayHello = function(){
    console.log("Hello");
}

sayHello();



/// 2
const saludar = nombre => console.log("Hola " + nombre )

saludar("Luis");


///3
const sum = function(a,b){
    return a + b 
}

console.log(sum(2,4))

///4
const sumar = (c, d) => c + d;

console.log(sumar(900, 10))


/// 5
const moreCode = () => {
    console.log("1")
    console.log("2")
}
moreCode();

///6


const nums = [1,2,3,4,5];

nums.forEach((el, index) => {
    console.log( el + " its on position " + index)
});




