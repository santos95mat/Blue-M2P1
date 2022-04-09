const button = document.querySelector(".button");
const text = document.querySelector(".evolution")

let fase = 1;
const evolution = [
    "Goku",
    "Goku SSJ 1",
    "Goku SSJ 2",
    "Goku SSJ 3",
    "Goku SSJ 4",
    "Goku Deus",
    "Goku Deus azul",
    "Goku Instinto Superior"
];
 
button.addEventListener("click", function() {
    if(fase === 7) {
        button.value = "ZERAR";
    } else {
        button.value = "EVOLUIR";
    }

    if(fase > 7) {
        fase = 0;
    }

    const goku = "goku"+fase;

    const estado = document.querySelector(".goku").id = goku;

    text.innerHTML = evolution[fase];

    fase++;
});
