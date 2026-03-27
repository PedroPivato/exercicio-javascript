function indiceMaiorMenor(array) {

    let menorValor = array[0]; 
    let maiorValor = array[0]; 
    let indiceMenor = 0;
    let indiceMaior = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] < menorValor) {
            menorValor = array[i];
            indiceMenor = i;
        }

        if (array[i] > maiorValor) {
            maiorValor = array[i];
            indiceMaior = i;
        }

    }

    console.log(`O menor valor é ${menorValor} e está no índice ${indiceMenor}`);
    console.log(`O maior valor é ${maiorValor} e está no índice ${indiceMaior}`);
}

indiceMaiorMenor([15, 3, 99, 7, 42]);