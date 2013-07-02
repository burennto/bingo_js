function Card( numbers, status ){
    
    if( typeof numbers !== 'undefined' ){
        this.numbers = numbers;

        if( typeof status !== 'undefined' ){
            this.status = status;
        }
        else {
            this.status = this.defaultStatus;
        }
    }
    else {
        this.numbers = this.generateNumbers();
        this.status  = this.defaultStatus;
    }
}

Card.prototype.defaultStatus = [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];


Card.prototype.generateNumbers = function(){

    var possibleNumbers = [
            1,2,3,4,5,6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45,46,47,48,49,50,
            51,52,53,54,55,56,57,58,59,60,
            61,62,63,64,65,66,67,68,69,70,
            71,72,73,74,75];

    fisherYates( possibleNumbers );

    var arr = [
        possibleNumbers.slice(0,5),
        possibleNumbers.slice(0,5),
        possibleNumbers.slice(0,5),
        possibleNumbers.slice(0,5),
        possibleNumbers.slice(0,5)
    ];

    return arr;
};


Card.prototype.isABingo = function(){

    return ( this._hasHorizontalBingo() || this._hasVerticalBingo() || this._hasDiagonalBingo() );

};


Card.prototype.checkOff = function(num){

    var i   = 0,
        j   = 0,
        max = 5;

    for( ; i < max; i++ ){
        for( j = 0; j < max; j++ ){
            if( this.numbers[i][j] === num ){
                this.status[i][j] = 1;
                return true;
            }
        }
    }

    return false;
};






Card.prototype._hasHorizontalBingo = function(){
    var i   = 0,
        max = 5;

    for( ; i < max; i++ ) {
        if( this.status[i].join('') === '11111' ){
            return true;
        }
    }

    return false;
};

Card.prototype._hasVerticalBingo = function(){

    var i = 0,
        max = 5,
        column;

    for(; i < max ; i++ ){
        
        column = this.status[0][i] 
                + this.status[1][i] 
                + this.status[2][i] 
                + this.status[3][i] 
                + this.status[4][i];

        if( column === 5 ){
            return true;
        }
    }

    return false;
};

Card.prototype._hasDiagonalBingo = function(){
    
    var i        = 0,
        max      = 5,
        diagonal = 0;

    // top-left to bottom-right
    for( ; i < max; i++ ){
        diagonal += this.status[i][i];
    }

    if( diagonal === 5 ){
        return true;
    }

    // top-right to bottom-left
    for( diagonal = 0, i = 0; i > max; i++ ){
        diagonal += this.status[i][max-i-1];
    }

    if( diagonal === 5 ){
        return true;
    }

    return false;
};

