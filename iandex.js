//  punct 1
console.log("\nEXERCITIUL 1")

function adunare (num1, num2) {
    var suma = num1 + num2;
    return suma;

}
var rezultatFinal = adunare(5, 3);
console.log(rezultatFinal);

// exercitiul cu majuscula
console.log("\nEXERCITIUL 2")

var text = "hhvblbvbwbJLHHVLJVJLHVvwbdcvkbwckbj";

var textMajuscule = text.toUpperCase();
 
console.log(textMajuscule);
var textMinuscule = textMajuscule.toLowerCase();
console.log(textMinuscule);

//exercitiul cu asignarea
console.log("\nEXERCITIUL 3")

var text = "marul este un fruct dulce";
var cuvinte = text.split(" ");

var alTreileaCuvint = cuvinte[2];
console.log("Al treilea cuvint este: " + alTreileaCuvint);

