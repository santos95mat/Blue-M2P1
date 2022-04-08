const button = document.querySelector(".button");

let faseA = 0;
let faseN = 1;
let frases = ["Goku", "Goku SSJ 1", "Goku SSJ 2", "Goku SSJ 3", "Goku SSJ 4", "Goku SSJ Deus", "Goku SSJ Azul", "Goku SSJ Superior"]

button.addEventListener("click", function() {
    if(faseA > 7) {
        faseA = 0;
    }

    if(faseN > 7) {
        faseN = 0;
    }

    const gokuA = "#goku"+faseA;
    const gokuN = "#goku"+faseN;

    const estadoA = document.querySelector(gokuA).style.display = "none";
    const estadoN = document.querySelector(gokuN).style.display = "block";

    button.value = frases[faseN];

    faseA++;
    faseN++;
});