import {wordCount} from "./wordCount.js";

describe("Word Counters",() =>{
    test("3 words",()=>{
        expect(wordCount("word  word  word")).toBe(3)
    })
    test("6 words",()=>{
        expect(wordCount("wo rd  wo rd  wo rd")).toBe(6)
    })
    test("12 words",()=> {
        expect(wordCount("w o r d  w o r d  w o r d")).toBe(12)
    })
    test("0 words", () => {
        expect(wordCount("")).toBe(0)
    })


} )