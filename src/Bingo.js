var Bingo = (function(){

  var _self       = {},

      cards        = [],
      cardCount    = 0,
      numbers      = [],
      drawnNumbers = [];


  // PUBLIC

  function init(playerCount){

    if( typeof playerCount === 'undefined' ){
      cardCount = Math.ceil( 100 * Math.random() );
    }
    else {
      cardCount = playerCount;
    }

    _generateRandomNumbers();
    _generateCards( cardCount );

    play();

  }


  function play(){

    playRound();

    if( numbers.length === 0 ){ return; }

    setTimeout(play, 100);
  }


  function playRound(){

    var drawnNumber = _drawNumber(),
        bingoCards = _checkNumberOffCards( drawnNumber );

    console.log('---');
    console.log('NEW ROUND!!!');
    console.log('Number drawn: ', drawnNumber);

    if( bingoCards.length > 0 ){
      weFoundAWinner( bingoCards );
    }

  }

  function weFoundAWinner( winners ){
    console.log('BINGOOOOO!!!!!', winners);
  }

  // PRIVATE

  function _generateRandomNumbers(){
    var i = 1,
        max = 76;
    for(; i < max; i++ ){
      numbers.push(i);
    }

    fisherYates( numbers );
  }

  function _generateCards( count ){
    var i = 0;

    for(; i < count; i++ ){
      cards.push( new Card() );
    }
  }

  function _drawNumber(){
    var newNumber = numbers.pop();
    
    drawnNumbers.push(newNumber);

    return newNumber;
  }


  function _checkNumberOffCards( nr ){
    var i = 0,
        winners = [];

    for(; i < cardCount; i++ ){
      cards[i].checkOff( nr );

      if( cards[i].isABingo() ){

        console.log('Found card ', i, ' to be a winner');
        console.log(cards[i].numbers);


        winners.push(i);
      }
    }

    return winners;
  }


  // RETURN

  _self = {
    init : init,
    drawNumber : function(){}
  };

  return _self;

}());


Bingo.init(100);