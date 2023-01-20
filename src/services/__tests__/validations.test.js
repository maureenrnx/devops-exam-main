const { isEmpty } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });

    test("should return true as the label is contain 8 numbers", () =>{
        const result = isEmpty("Labellll");
        expect(result).toBe(true);
    });

    test("should return false as the label is contain 8 numbers", () =>{
        const result = isEmpty("Labellll");
        expect(result).toBe(false);
    });

    test("should return true if the label contain 1 special char" , () => {
        const result = isEmpty("Label-l");
        expect(result).toBe(true);
    });

    test("should return false if the label contain 1 special char" , () => {
        const result = isEmpty("Label-l");
        expect(result).toBe(false);
    });

    test("should return true if the label contain 1 number" , () => {
        const result = isEmpty("Label1");
        expect(result).toBe(true);
    });


    test("should return false if the label contain 1 number" , () => {
        const result = isEmpty("Label1");
        expect(result).toBe(false);
    });



});

// TODO: Create tests suite for validation function
