const interface = require('readline-sync');

function findPrime(number)
{

  if (number===1)
  {
    return false;
  }
  else if(number === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < number; x++)
    {
      if(number % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

do{
    console.log("1.-Suma");
    console.log("2.-Restar");
    console.log("3.-Multiplicar");
    console.log("4.-Dividir");
    console.log("5.-Exit");
    response = interface.question("que quieres hacer pendejo?");

    if(response != "5"){
        const firstNumber = interface.question ("primer numero");
        const secondNumber = interface.question ("segundo numero");
    

    switch(response){
        case "1":
        var result = parseInt(firstNumber) + parseInt(secondNumber);
        
        break;
        case "2":
        var result = parseInt(firstNumber) - parseInt(secondNumber);
    
    break;
    case "3":
        var result = parseInt(firstNumber) * parseInt(secondNumber);
        
        break;
        case "4":
        var result = parseInt(firstNumber) / parseInt(secondNumber);
        


        break;
        default:
        break; 
    }


    let IsPrimeNumber = findPrime(result);

    

    if (IsPrimeNumber) {
        console.log(" yes, it is a prime number")
    } else {
        console.log("No, it's not a primer number");
    }
    console.log("RESULTADO ES: "+result
    );


    }


}while(response !="5");