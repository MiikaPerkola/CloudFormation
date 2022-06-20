const ps = require("prompt-sync");
const prompt = ps();

let oikeatVataukset = 0;
let alku = prompt("jos haluat aloittaa pelin, kirjoita 'k' ");

if (alku == "k") {
  let kysymys1 = prompt("Mikä on suomen pääkaupunki?");
  if (kysymys1 == "Helsinki") {
    console.log("Jeee, oikein!");
    oikeatVataukset++;
  }

  let kysymys2 = prompt("Mikä on suomen suurin järvi?");
  if (kysymys2 == "Saimaa") {
    console.log("Jeee, oikein!");
    oikeatVataukset++;
  }

  let kysymys3 = prompt("Mikä on Suomen kansalliseepos?");
  if (kysymys3 == "Kalevala") {
    console.log("Jeee, oikein!");
    oikeatVataukset++;
  }

  let kysymys4 = prompt("Mikä on Suomen korkein tunturi?");
  if (kysymys4 == "Halti") {
    console.log("Jeee, oikein!");
    oikeatVataukset++;
  }

  let kysymys5 = prompt("Mikä on Suomen pisin joki?");
  if (kysymys5 == "Kemijoki") {
    console.log("Jeee, oikein!");
    oikeatVataukset++;
  }

  let kysymys6 = prompt("Mikä on Suomen yleisin naisen nimi?");
  if (kysymys6 == "Maria") {
    console.log("Jeee, oikein!");
    oikeatVataukset++;
  }
} else console.log("ei sitte");
console.log(`${oikeatVataukset}/6`);

console.log("nyt tää on parempi koodi")
