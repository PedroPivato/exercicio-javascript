const mdc = require('./MDC');

describe('MDC', () => {
    
    beforeAll(() => {
        console.log('Iniciando testes do MDC...');
    });

    afterAll(() => {
        console.log('Testes do MDC finalizados!');
    });

    it('MDC de 12 e 8 deve ser 4', () => {
        expect(mdc(12, 8)).toBe(4);
    });

    it('MDC de 100 e 75 deve ser 25', () => {
        expect(mdc(100, 75)).toBe(25);
    });

    test('MDC de 7 e 3 deve ser 1', () => {
        expect(mdc(7, 3)).toBe(1);
    });

});