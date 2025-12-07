test('Deve verificar se um valor é maior que outro', () => {
    expect(10).toBeGreaterThan(5)
    expect(10).toBeGreaterThanOrEqual(10)
})


test('Deve verificar se um número é menor que outro', () => {
    expect(10).toBeLessThan(15)
    expect(10).toBeLessThanOrEqual(10)
})

test('Deve verificar se o valor é próximo de outro', () => {
    expect(0.22222).toBeCloseTo(0.22, 2)
})