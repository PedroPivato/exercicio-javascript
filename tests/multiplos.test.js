const somaMultiplos = require('./multiplos');

describe('Soma dos Múltiplos', () => {

    it('deve retornar 156361 para múltiplos de 5 ou 7 abaixo de 1000', () => {
        expect(somaMultiplos()).toBe(156361); 
    });

    it('deve chamar o console.log com o resultado', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        somaMultiplos();
        expect(consoleSpy).toHaveBeenCalledWith('A soma é 156361'); 
        consoleSpy.mockRestore();
    });

    it('stub — simula a função retornando valor fixo', () => {
        const somaStub = jest.fn().mockReturnValue(156361); 
        expect(somaStub()).toBe(156361);
        expect(somaStub).toHaveBeenCalled();
    });

});