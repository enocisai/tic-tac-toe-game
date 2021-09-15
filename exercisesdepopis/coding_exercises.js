
//* Make a function that returns 
//* the number of vowels and consonants 

const countLetters = (string = "")=>{
    if(!string) return console.log("Insert a string")
    
    if (typeof string!== "string") return console.log("This is not a string")

    let vowels = 0;
    let consonants = 0;
    let numbers = 0
    

    string = string.toLocaleLowerCase()

    for(let letter of string){
        if(/[aeiou]/.test(letter)){
            vowels++;
        }
        if(/[bcdfghjklmnpqrstvwxyz]/.test(letter)){
            consonants++
        }
        if(/[0123456789]/.test(letter)){
            numbers++;
    }
    }
    return console.log({
        string,
        vowels,
        consonants,
        numbers

    })
}

countLetters("Today is September 09, 2021 in Phoenix Arizona ")





