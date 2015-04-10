describe('triangle', function() {
    it("will return equliateral if the user inputs three equal sides", function() {
        expect(triangle(1, 1, 1)).to.equal("equilateral");
    });
    it("will return scalene if Side A and Side B are equal, but not equal to Side C", function() {
        expect(triangle(2, 2, 3)).to.equal("scalene");
    });
    it("will return scalene if Side A and Side C are equal, but not equal to Side B", function() {
        expect(triangle(2, 3, 2)).to.equal("scalene");
    });
});
