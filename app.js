let x = 1;
let y = 4;
let z = -1;
let par1 = document.getElementById("para1");
let par2 = document.getElementById("para2");
let par3 = document.getElementById("para3");
let par4 = document.getElementById("para4");
let par5 = document.getElementById("para5");
if (x < 2) {
    console.log("x est inférieur à 2");
    par1.innerText = "x est inférieur à 2";
}
if (y > 3) {
    console.log("y est supérieur à 3");
    par2.innerText = "y est supérieur à 3";
}
if (z <= 0) {
    console.log("z est inférieur ou égal à 0");
    par3.innerText = "z est inférieur ou égal à 0";
}

if ( (x === 1) && (y > 3) && (z <= 0) ) {
    console.log("x est inférieur à 1, y supérieur à 3 et z inférieur ou égal à 0");
    par4.innerText = "x est inférieur à 1, y supérieur à 3 et z inférieur ou égal à 0";
}

if ( (x === 1) && (y > 3) || (z === -1) ) {
    console.log("x est égal à 1 ET y est égal à 3 OU z est égal à -1");
    par5.innerText = "x est égal à 1 ET y est égal à 3 OU z est égal à -1";
}