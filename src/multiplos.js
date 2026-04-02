function somaMultiplos() {

    let soma = 0; 


    for (let i = 1; i < 1000; i++) {


        let multiploDE5 = i % 5 === 0;

        let multiploDE7 = i % 7 === 0;

        if (multiploDE5 || multiploDE7) {
            soma = soma + i;
        }

    }

    console.log(`A soma é ${soma}`);
    return soma;
}


module.exports = somaMultiplos;