describe("Card", function() {

    var cardNoBingo,
        cardHorizontalBingo,
        cardVerticalBingo,
        cardDiagonalBingo,
        numbers = [
            [ 1, 2, 3, 4 ,5 ],
            [ 6, 7, 8, 9, 10 ],
            [ 11, 12, 13, 14, 15 ],
            [ 16, 17, 18 ,19, 20 ],
            [ 21, 22, 23, 24, 25 ]
        ],
        noBingo = [
            [ 1, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ],
        horizontalBingo = [
            [ 1, 1, 1, 1, 1 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ],
        verticalBingo = [
            [ 1, 0, 0, 0, 0 ],
            [ 1, 0, 0, 0, 0 ],
            [ 1, 0, 0, 0, 0 ],
            [ 1, 0, 0, 0, 0 ],
            [ 1, 0, 0, 0, 0 ]
        ],
        diagonalBingo = [
            [ 1, 0, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 0, 1 ]
        ];

    describe("#isABingo", function() {

        beforeEach(function() {
            cardNoBingo         = new Card(numbers, noBingo);
            cardHorizontalBingo = new Card(numbers, horizontalBingo);
            cardVerticalBingo   = new Card(numbers, verticalBingo);
            cardDiagonalBingo   = new Card(numbers, diagonalBingo);
        });

        describe("card with no BINGO", function() {

            it("returns false", function() {
                expect( cardNoBingo.isABingo() ).toBeFalsy();
            });

        });

        describe("card with horizontal BINGO", function() {

            it("returns true", function() {
                expect( cardHorizontalBingo.isABingo() ).toBeTruthy();
            });

        });

        describe("card with vertical BINGO", function() {

            it("returns true", function() {
                expect( cardVerticalBingo.isABingo() ).toBeTruthy();
            });

        });

        describe("card with diagonal BINGO", function() {

            it("returns true", function() {
                expect( cardDiagonalBingo.isABingo() ).toBeTruthy();
            });

        });

    });

    describe("#checkOff", function() {

        var card;

        beforeEach(function(){

            var numbers = [
                [ 1, 2, 3, 4 ,5 ],
                [ 6, 7, 8, 9, 10 ],
                [ 11, 12, 13, 14, 15 ],
                [ 16, 17, 18 ,19, 20 ],
                [ 21, 22, 23, 24, 25 ]
            ];

            card = new Card(numbers);

        });

        describe('card checks off existing number', function(){

            it('returns true', function(){
                expect( card.checkOff(7) ).toBeTruthy();
            });

            it('returns true again', function(){
                card.checkOff(7);
                expect( card.checkOff(7) ).toBeTruthy();
            });

        });

        describe('card does not check off non-existing number', function(){

            it('returns false', function(){
                expect( card.checkOff(30) ).toBeFalsy();
            });

        });

    });

    describe("a game", function() {

        var card;

        beforeEach(function(){

            var numbers = [
                [ 1, 2, 3, 4 ,5 ],
                [ 6, 7, 8, 9, 10 ],
                [ 11, 12, 13, 14, 15 ],
                [ 16, 17, 18 ,19, 20 ],
                [ 21, 22, 23, 24, 25 ]
            ];

            card = new Card(numbers);

            card.checkOff(1);
            card.checkOff(2);
            card.checkOff(3);
            card.checkOff(4);
            card.checkOff(5);

        });

        describe('checking off a row ends in BINGO', function(){

            it('is a BINGO', function(){
                expect( card.isABingo() ).toBeTruthy();
            });

        });

    });

});

