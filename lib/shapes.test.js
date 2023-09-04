const { describe } = require("node:test");
const {Triangle, Square, Circle} = require("./shapes.js");

describe("Triangle test", () => {
    test('test for a triangle with a yellow background', () => {
      const shape = new Triangle();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(
        '<polygon points='
      )
    })
    
})