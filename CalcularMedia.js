
let nota1 = parseFloat(prompt("Digite sua primeira nota (entre 0 e 10):"));
let nota2 = parseFloat(prompt("Digite sua segunda nota (entre 0 e 10):"));
let nota3 = parseFloat(prompt("Digite sua terceira nota (entre 0 e 10):"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Sua média é", media.toFixed(1));

