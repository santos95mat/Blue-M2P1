const button = document.querySelector(".button");
const text = document.querySelector(".text")

let fase = 1;
const frases = [
    "Goku",
    "Goku SSJ 1",
    "Goku SSJ 2",
    "Goku SSJ 3",
    "Goku SSJ 4",
    "Goku Deus",
    "Goku Deus azul",
    "Goku Instinto Superior"
];
const btn = ["Zerar", "Evoluir"];
 
button.addEventListener("click", function() {
    if(fase === 7) {
        button.value = btn[0];
    } else {
        button.value = btn[1];
    }

    if(fase > 7) {
        fase = 0;
    }

    const goku = "goku"+fase;

    const estado = document.querySelector(".goku").id = goku;

    text.value = frases[fase];

    fase++;
});
