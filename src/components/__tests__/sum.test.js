import { sum } from "../sum"

test('sum function  should return a+b', () => {
    const result = sum(4, 1);
    //ASSERTION:
    expect(result).toBe(5)
  
})
