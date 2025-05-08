let resultado = ""
function parImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar"
}

function mostrarNumerosEntre(num1, num2) {
    for (let i = num1 + 1; i < num2; i++){
        alert(resultado += `${i} - ${parImpar(i)}\n`);

    }
}

function solicitarNumeros(){
    const num1 = parseInt(prompt("Digite o primeiro número (menor)"));
    const num2 = parseInt(prompt("Digite o segundo número (maior)"));

    if (num1 < num2) {
        mostrarNumerosEntre(num1, num2);
    }else {
        alert("Os números inseridos são inválidos. O primeiro número deve ser menor que o segundo.");
    }
}

solicitarNumeros();