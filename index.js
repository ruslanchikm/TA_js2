// punctul 1

console.log("\nEXERCITIUL 1")

let ziua = "Duminica";

ziua = ziua.toLowerCase();

switch (ziua) {
  case "luni": 
    console.log("Astazi este luni");
    break;
    
  case "marti": 
    console.log("Astazi este marti");
    break;

  case "miercuri": 
    console.log("Astazi este miercuri");
    break;
  
    case "joi": 
    console.log("Astazi este joi");
    break;
    
  case "vineri": 
    console.log("Astazi este vineri");
    break;

  case "simbata": 
    console.log("Astazi este inceput de weekend");
    break;

    case "duminica": 
    console.log("Cu parere de rau weeekendul s-a termintat!");
    break;

default :
    console.log("Precizeaza te rog ziua saptaminii")
}

// punctul 2 v.1

console.log("\nEXERCITIUL 2 var.1")

const text = "gldsvl d";


   if(text.length > 10) {
    console.log("lungimea str este mai mare de 10");
   
    } else if (text.length < 10) {
        console.log("lungimea str este mai mica de 10");
    }
    else if (text.length = 10) {
        console.log("lungimea str este egala 10");
   }
// punctul 2 v.2

console.log("\nEXERCITIUL 2 var.2")

var str = "gld";

var lungStr;

   if(text.length > 10) {
    lungStr = "lungimea str este mai mare de 10";
   
    } else if (text.length < 10) {
        lungStr = "lungimea str este mai mica de 10";
    }
    else if (text.length = 10) {
        lungStr = "lungimea str este egala 10";
   }
console.log(lungStr);