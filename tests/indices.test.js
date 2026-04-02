const indiceMaiorMenor = require ('../src/indices');

describe('Índice Maior e Menor', () => {

    beforeEach(() => {
        console.log('Rodando um teste...');
    });

    it('deve retornar índice 1 para o menor e 2 para o maior', () => {
        const resultado = indiceMaiorMenor([15, 3, 99, 7, 42]);
        expect(resultado.indiceMenor).toBe(1);
        expect(resultado.indiceMaior).toBe(2);
    });

    it('deve retornar índice 0 para o menor e 3 para o maior', () => {
        const resultado = indiceMaiorMenor([1, 5, 8, 100]);
        expect(resultado.indiceMenor).toBe(0);
        expect(resultado.indiceMaior).toBe(3);
    });

});