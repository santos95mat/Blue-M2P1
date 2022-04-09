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
    "Goku Instinto Superior"
];
 
button.addEventListener("click", function() {
    if(fase === 6) {
        button.value = "ZERAR";
    }
    if(fase > 6) {
        button.value = "EVOLUIR";
        fase = 0;
    }

    const id = "goku"+fase;
    const goku = document.querySelector(".goku");
    
    goku.id = id;
    text.innerHTML = evolution[fase];

    fase++;
});
