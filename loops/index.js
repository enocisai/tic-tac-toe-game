

//  function loops1(n){

//      for(let j=0;j<n;j++){
//          const row = []

//          for(let i =0;i<n;i++){
//              row.push("X")
//          }
//          console.log(row.join("  "))
//      }
//  }


// //loops1(5)

// //  function loops2(n){

// //      for(let j=0;j<n;j++){
// //          const row = []

// //          for(let i =0;i<n;i++){
// //              if(i===j){
// //                  row.push("O")
// //              }else{

// //                  row.push("X")


// //              }
// //              console.log(row.join(" "))
// //          }

// //      }

// //   }

// // //loops2(4)

// //  // function loops3(n){

// //  //   for(let j=0;j<n;j++){
// //  //       const row = []

// // //     for(let i =0;i<n;i++){
// // //           if(i === n-j-1){
// //  //               row.push("E")
// //  //           }else{

// //   //              row.push("X")
// //    //         }
// //     //    }
// //       //  console.log(row.join(" "))
// //    // }
// // // }

// // // loops3(5)
// // // const lista = []
// // // for(let i=0;i<3;i++){
// // //     if(i%2 === 0){

// // //         lista.push ("x")
// // //     }else{
// // //         lista.push ("o")
// // //     }

// // // }
// // // console.log(lista.join(" "))

// // // console.log("x")
// // // console.log("x")
// // // console.log("x")
// // // console.log("x")

// //  const lista = [ ]
// //  const n = 8
// //  const MITAD = Math.floor(n/2)
// //  const FIRST = 0
// //  const LAST =  n-1
// //   for(i=0;i<n;i++) {
// //      if( i == FIRST  )
// //     {
// //          lista.push("o")

// //      }
// //      else  if( i == LAST  )
// //      {
// //          lista.push("o")

// //     }
// //      else if( i== MITAD  ) 
// //      {
// //        lista.push("")
// //      }
// //      else if( i > n-4-1 ) 
// //      {
// //         lista.push("x")

// //     }

// //     else
// //      {
// //          lista.push("x")


// //      }
// //      console.log(lista.join(""))
// //   }



// const n = 10
// for (let i = 0; i <n; i++) {
//   console.log("=================")
//   console.log( " i = " ,i)

//   if (i == n-1) {
//     console.log(" RESULT=> " +"o")
//   }
//   else {
    
//     console.log(" RESULT=> " +"x")
        

//       }
// }
      
    
  //}
  
//}



// const n = 10
// const last = n-1
// 
//    else{
//      if (last)
//      console.log("x")
//    }
// }



// const n = 8;
// const m = 3

// for(let i=0;i<n;i++){
  
//    if(i<m+1 && i>0){
//       console.log("x")
//    } 
//    else
//    console.log("o  ")
// }




// const n = 11
// const m = 4
// const middle = Math.floor(n/2)
// const last = n-1

// let i=0;
// while (i<n){

  

//   if(i==middle || i==0 || i==n-1)
//     console.log("x")
     
//      else
    
//     console.log("o")

//   i++;
//  }

// const n=5

// const acc = []
// for(let i=0;i<n;i++){
//    acc.push("x")

//   console.log(acc.join(" "))

//}

// var  time = 15
// if (time < 12) {
//   console.log("Good morning");
// } else if (time < 14) {
//   console.log("Good Afternoon");
// } else {
//   console.log("Good evening");
// } 

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// let num1 = 2
// let num2 = 24
// function greaterNum (num1, num2){
//   if (num1 > num2) {
//     return num1;
//   }else{ 
//     return num2;
//   }
//   }
//   console.log(num1);
//   console.log("soy joto")


// function assignGrade(score) {
//   if (score > 90) {
//       return 'A';
//   } else if (score > 80) {
//       return 'B';
//   } else if (score > 70) {
//       return 'C';
//   } else if (score > 65) {
//       return 'D';
//   } else {
//       return 'F';
//   }
// }

// console.log('You got a ' + assignGrade(9789));
// let myVariable = "puto"


// console.log(myVariable)

// let numbers = [  ];
// //let myBignumber = 0
// let mySmallestnumber = numbers[0]
//  let average = numbers.length 
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//   // sum += numbers[i]
//         // 343         3

//   if(numbers[i]  < mySmallestnumber ){
//     mySmallestnumber = numbers[i]
//   }
//   // mySmallestnumber = 5
          
// }
// console.log(mySmallestnumber)
// // sum = sum/average;

// var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

// function getNegativeNumbers(array) {
//   return array.filter(function(value) {
//     return value < 0;
//   });
// }
// console.log(getNegativeNumbers(myArray));


// let allNumbers = [ 5, 2, 2, 3, 25, 1, 34, 4];
// let hasNegatives = false
// for(let i =0 ; i < allNumbers.length; i++){
//      if(!hasNegatives && allNumbers[i] < 0){
//        hasNegatives = true
//      }
  
// }
// console.log(hasNegatives)


// ------------------------------------
// let numbers = [ 5, 5, 5, 5, 5];
// // let i = 0; // ??????????
// for(let i = 0; i < numbers.length; i++){
//   numbers[i] = numbers[i] +10000000000;
// }
// console.log(numbers)
// ---------------------------------------
// let texto = "Hola amiko";

// for(i = 0; i < texto.length; i++) {
//   console.log(texto[i]);
// }

// var length = 10;
// var myString = "elon musk has become bitcoin’s biggest influencer, like it or not";
// var puntitos = "...";
// var myTruncatedString = myString.substring(0,15); 
// myTruncatedString = myTruncatedString.concat(puntitos);
   

// console.log(myTruncatedString);

// let text1  = "tyjkhgul";
// let text2 = "765979";
// let putTogether = text1.concat(text2);

// console.log(putTogether);

// const input = "elon musk has become bitcoin’s biggest influencer, like it or not"


// const inputAsArray = input.split(" ")

// let secondArray = []
// for(let i=0;i<inputAsArray.length;i++){
//   const word = inputAsArray[i]
//   const firstLetter = word[0]
//   const capitalLetter = firstLetter.toUpperCase()
//   const capitalWord = capitalLetter + word.substring(1)

//   secondArray.push(capitalWord)
// }
// const result = secondArray.join(" ")

// console.log(result)




// let myText = ['elon', 'musk', 'has', 'become', 'bitcoin’s', 'biggest', 'influencer,', 'like', 'it', 'or', 'not']

// for (let theText of myText) {
//   theText = theText.charAt(0).toUpperCase() + theText.substr(1);

//   console.log(theText);
// }

// const input = "elon musk has become bitcoin’s biggest influencer, like it or not"

// let myArray = input.split(" ")
// let contador = 0 
// let Popis = []
// for(let i = 0; i < myArray.length; i++){ 
//   let palabra = myArray[i]  //elon [0]
//   Popis.push(palabra) // ewstamos agragando el elon a la popis. [0]elon + popis array
  
//   if(palabra != ","){
//     contador = contador + 1 
//   }
//   if(contador==2){
//     Popis.push("|")
//     contador = 0
//   }
//   console.log(palabra,contador)
// }

// console.log(Popis.join(" "))






// function search (word){

//   const words = [
//     "la popis",
//     "my string",
//     "elon musk",
//     "to the moooooooooooooon",
//     "chanois es joto"
//   ]
//   let Notfound = true 
//   // Your logic
//   for(let i = 0; i < words.length; i++){
     
//   let resultadoBuscador = words[i].includes(word)
  
//   if (resultadoBuscador){
//     console.log("la palabra "+ words[i] + " fue encontrada");
//     Notfound = false
//    } 
//   }
  
//   if (Notfound){
//     console.log("la palabra " + (word) + " no fue encontrada")
//   }
// }



// const result = search("elon")  /// chanois es joto
// // console.log(result)





// let name = "hello everybody welcome to my house"
// let resultado = .includes("hello everybody welcome to my house")
// console.log(resultado)

// var product = 2
//  var product2 = 7

// function myFunction(product, product2) {
//   return product * product2;
// }

// console.log(myFunction (45, 455) );

// const items = [ 
//   { name:'Computer' , price: 44},
//   { name: 'Bike', price: 51 },
//   { name: 'iPhone' , price: 4 },
//   { name: 'Watch' , price: 45 },
//   { name: 'Tablet' , price: 2 },
//   { name: 'Kitchen' , price: 12 },
//   { name: 'Laptop' , price: 3 },
//   { name: 'Fruit' , price: 43 },
// ]

// const products = items.filter(item => item.price >= 32);






////.FILTER
// let peopleCity = [
//   { name:'Luis'  , city: 'Denver' },
//   { name: 'Enoc' , city: 'Houston'},
//   { name: 'Alberto' , city: 'Phoenix' },
//   { name: 'Marcos' , city: 'Mexico' },
  // { name: 'Jessica' , grade: 45 },
  // { name: 'Antony' , grade: 62 },
  // { name: 'Jesus' , grade: 73 },
  // { name: 'Laura' , grade: 67 },
//];
 //const bestCities = peopleCity.find(function (bigCity) {
   //return bigCity.city === 'Houston'

 //function myCity (place) {
  // return place.city === "Mexico"

 //}

 //console.log(peopleCity.find(myCity).city);

//  let bestGrades = grades.filter( function (grado) {

  //return grado > 90
//////////////
// .MAP //
// const products = [ 
//     { name:'Computer' , price: 700 , stock: 10},

//     { name: 'Bike', price: 200 , stock: 15},

//     { name: 'iPhone' , price: 1000 , stock: 20},
// ];

// const totalProducts = products.map(thingy => ({
//  name: thingy.name,
//  totalProducts: thingy.price * thingy.stock
// }));

// console.log(totalProducts);

//{
//   let array = [1, 2, 3, 4, 5];
//   let arrayCuadrado = array.map(function(a){
//       return a*a;
//   });
//   console.log(arrayCuadrado);
//   //Salida: [1, 4, 9, 16, 25]
// }


 //let grades = [ 90, 45, 92, 80, 67, 99, 100, 74, 81, 79, 91, 89.1];

// let bestGrades = grades.filter( grado => grado <= 90);
// let bestGrades = grades.filter( grado => {
//   return grado > 90

// });
// let bestGrades = grades.filter( (grado) => {
//   return grado > 90

// });
//let bestGrades = grades.filter( function (grado) {

  //return grado > 90

 //array.filter(function(currentValue, index, array), thisValue)
//})




 //console.log(bestGrades); 


// let numbers = [6, 42, 4, 81, 56, 33];

// let filteredNumbers = numbers.filter(a => a <40);

// console.log(filteredNumbers);

// let theArray = [ 'Police', 'Doctor', 'Nurse', 'Player', 'Chef'];

// theArray.forEach(function(element,index,arreglo){
// console.log(element)

// });

// let player = {
//  name: "John",
//  lastName: "G",
//  age: 34,
//  weight: 100
// }

// console.log("At the beginning of the year " + player.name + " and his weight was " + player.weight + "lbs")

// const INCREASE_POUNDS = 0.02
// const weeks = 2

// function increaseWeight (player) {
//   return player.weight += 5
// }
// function decreaseWeight (player) {
//   return player.weight -= 5
// }
// for( let i = 1; i <= weeks; i++) {
//   let random = Math.random()
  
//   if(random < 0.25) {
//      increaseWeight (player)
//   }else if (random < 0.5) {
//   decreaseWeight(player)
//   }

// }



// console.log("At the end of the year " + player.name + " and his weight is " + player.weight + "lbs")

// let number = 5;

// const eat = () => Math.random() < 0.25

// do {
//   number++
// } while (!eat())

// console.log("today i ate  " + number + " tacos ")



let n = 4;

while(n < 4) {
  n++;
  console.log("n = " + n);
  console.log( "########################")
}

let i = 1;


//*Al menos una vez.
do {
  i++;
  //i = i + 1
  

console.log( "------------------------")
} while (i < 10 );

console.log("i = " + i)