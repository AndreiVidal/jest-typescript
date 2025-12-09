import { Utils } from "../src/Utils";
describe('Teste função max', () => {
    test('Deve retornar null se receber um array vazio', () => {
        const res = Utils.max([])
        expect(res).toBeNull()
    })
    test('Deve retornar o maior elemento do array', () => {
        const res = Utils.max([5, 8, 5, 9, 11])
        expect(res).toBe(11)
    })
})

describe('Teste função min', () => {
    test('Deve retornar null se receber um array vazio', () => {
        const res = Utils.min([])
        expect(res).toBeNull()
    })
    test('Deve retornar o menor elemento do array', () => {
        const res = Utils.min([5, 8, 5, 9, 11])
        expect(res).toBe(5)
    })

})

describe('Teste função somaArray', () => {
    test('Deve retornar a soma da array', () => {
        const res = Utils.somaArray([3, 3, 3])
        expect(res).toBe(9)
    })
    test('Deve retornar 0', () => {
        const res = Utils.somaArray([])
        expect(res).toBe(0)
    })
    test('Deve somar diferentes números', () => {
        const arr = [1, 1, 1.12, -1]
        expect(Utils.somaArray(arr)).toBeCloseTo(2.12, 2)
    })
})

describe('Teste função limitarNumero', () => {
    const min = 5
    const max = 20

    test('Deve retornar o valor da const n', () => {
        const n = 10
        expect(Utils.limitarNumero(n, min, max)).toBe(n)
    })

    test('Deve retornar o valor da const min se o valor da const n for menor que o min', () => {
        const n = 2
        expect(Utils.limitarNumero(n, min, max)).toBe(min)
    })
    test('Deve retornar o valor da const max se o valor da const n for maior que o max', () => {
        const n = 30
        expect(Utils.limitarNumero(n, min, max)).toBe(max)
    })

})
