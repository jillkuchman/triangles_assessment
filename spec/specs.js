describe('triangle', function() {
    it("will return equliateral if the user inputs three equal sides", function() {
        expect(triangle(1, 1, 1)).to.equal("equilateral");
    });
    it("will return isoceles if Side A and Side B are equal, but not equal to Side C", function() {
        expect(triangle(2, 2, 3)).to.equal("isoceles");
    });
    it("will return isoceles if Side A and Side C are equal, but not equal to Side B", function() {
        expect(triangle(2, 3, 2)).to.equal("isoceles");
    });
    it("will return isoceles if Side B and Side C are equal, but not equal to Side A", function() {
        expect(triangle(3, 2, 2)).to.equal("isoceles");
    });
    it("will return isoceles if the two equal side lengths are greater than the unequal side", function() {
        expect(triangle(2, 3, 3)).to.equal("isoceles");
    });
    it("will return scalene if all three sides are different lengths", function() {
        expect(triangle(2, 3, 4)).to.equal("scalene");
    });
    it("will return invalid if triangle is not valid, i.e. does not pass triangle inequality test (a+b>c, a+c>b, b+c>a)", function() {
        expect(triangle(8, 9, 77)).to.equal("invalid")
    });

});
