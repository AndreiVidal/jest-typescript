import { soma } from "../src/soma";

test("Deve testar a função soma", () => {
    const result = soma(1, 2)
    expect(result).toBe(3)
})


test("Deve retornar a soma de números positivos", () => {
    expect(soma(2, 3)).toBe(5)
})

test("Deve retornar a soma de números negativo", () => {
    expect(soma(-2, -3)).toBe(-5)
})


