const button = document.querySelector(".button");

let fase = 1;
let frases = ["Goku", "Goku SSJ 1", "Goku SSJ 2", "Goku SSJ 3", "Goku SSJ 4", "Goku SSJ Deus", "Goku SSJ Azul", "Goku SSJ Superior"]

button.addEventListener("click", function() {
    if(fase > 7) {
        fase = 0;
    }

    const goku = "#goku"+fase;

    const estado = document.querySelector(".goku").id = goku;

    button.value = frases[fase];

    fase++;
});
