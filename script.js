// ex1
function calculaMedia() {

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);


    const media = (nota1 + nota2 + nota3) / 3;


    const resultadoDiv = document.getElementById('resultado');


    if (media >= 6) {
        resultadoDiv.textContent = `Aprovado com média ${media.toFixed(2)}`;
        resultadoDiv.className = 'resultado aprovado';
    } else {
        resultadoDiv.textContent = `Reprovado com média ${media.toFixed(2)}`;
        resultadoDiv.className = 'resultado reprovado';
    }
}

// ex2
function imprimePares() {
    let pares = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            pares += i + ' ';
        }
    }
    document.getElementById('pares').textContent = pares;
}

// ex3
function menorNumero() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    const menor = numero1 < numero2 ? numero1 : numero2;

    document.getElementById('menor').textContent = `Menor número é: ${menor}`;
}

// ex4
function maiorNumero() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const maior = num1 > num2 ? num1 : num2;

    document.getElementById('maior').textContent = `Maior número é: ${maior}`;
}