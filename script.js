const calc = document.getElementById('calcular');

function calcular(){

}

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('resultado');

    if (nome != '' && altura != '' && peso != ''){
        
        const valorIMC = (peso / (altura*altura)).toFixed(1);

        let classificacao = "";

        if (valorIMC < 18.5){
            classificacao = "abaixo do peso.";
        }else if(valorIMC < 25){
            classificacao = "com peso ideal.";
        }else if(valorIMC < 30){
            classificacao = "levemente acima do peso.";
        }else if(valorIMC < 35){
            classificacao = "com obesidade grau I.";
        }else if(valorIMC < 40){
            classificacao = "com obesidade grau II.";
        }else {
            classificacao = "com obesidade grau III, Cuidado!!";
        }

        result.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else{
        result.textContent = 'Preencha todos os campos';
    }
}

calc.addEventListener('click', imc);