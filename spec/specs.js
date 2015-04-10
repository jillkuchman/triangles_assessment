describe('triangle', function() {
    it("will return equliateral if the user inputs three equal sides", function() {
        expect(triangle(1)).to.equal("equilateral");
    });
});
