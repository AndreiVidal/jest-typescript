import { soma } from "../src/soma";

test("Deve testar a função soma",()=>{
    const result = soma(1,2)
    expect(result).toBe(3)
})
