let numeroSecreto = 9;
let tentativa;
let contador = 0;

do {
    tentativa = Number(prompt("Adivinhe o número de 1 a 10: "));
    contador++;

    if (tentativa !== numeroSecreto) {
        alert("Número incorreto! Tente outro.");
    }
} while (tentativa !== numeroSecreto);
alert("Parabéns! Você acertou o número em " + contador + " tentativas. ");