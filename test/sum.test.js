//const sum = (a, b) => a + b;

//test('adds 1 + 2 to equal 3', () => {
//expect(sum(1, 2)).toBe(3);
//});

describe("Nuestro primer test", () => {
    it("Comprobamos que nos gusta JavaScript y escribir tests", () => {
      const meGustaJavaScript = true;
      expect(meGustaJavaScript).toBe(true);
    });
  });