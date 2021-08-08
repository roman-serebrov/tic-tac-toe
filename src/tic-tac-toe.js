const FIRST_PLAYER_SYMBOL = 'x';
const SECOND_PLAYER_SYMBOL = 'o';
let step = 0
class TicTacToe {
    constructor() {
        this.isFirstActive = true;
        this.matrix = [
            new Array(3).fill(null),
            new Array(3).fill(null),
            new Array(3).fill(null)
        ];

    }

    getCurrentPlayerSymbol() {
        return this.isFirstActive ? FIRST_PLAYER_SYMBOL : SECOND_PLAYER_SYMBOL;
    }

    nextTurn(rowIndex, columnIndex) {
        step++
        if (rowIndex < 0 || rowIndex > 2) {
            return null;
        }
        if (columnIndex < 0 || columnIndex > 2) {
            return null;
        }
        if (this.matrix[rowIndex][columnIndex] !== null) {
            return this.matrix[rowIndex][columnIndex];
        }

        this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.isFirstActive = !this.isFirstActive;
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {

        for (let i = 0; i < this.matrix.length; i++) {
            if (this.matrix[i].every(v => v === FIRST_PLAYER_SYMBOL)) {
                this.winner = true
                return FIRST_PLAYER_SYMBOL;
            }
            if (this.matrix[i].every(v => v === SECOND_PLAYER_SYMBOL)) {
                this.winner = true
                return SECOND_PLAYER_SYMBOL;

            }
        }
        ///// вертикали
        if(
            this.matrix[0][0] === SECOND_PLAYER_SYMBOL &&
            this.matrix[1][0] === SECOND_PLAYER_SYMBOL &&
            this.matrix[2][0] === SECOND_PLAYER_SYMBOL
        ){
            this.winner = true
            return SECOND_PLAYER_SYMBOL
        }
        if(
            this.matrix[0][0] === FIRST_PLAYER_SYMBOL &&
            this.matrix[1][0] === FIRST_PLAYER_SYMBOL &&
            this.matrix[2][0] === FIRST_PLAYER_SYMBOL
        ) {
            this.winner = true
            return FIRST_PLAYER_SYMBOL
        }

        if(
            this.matrix[0][1] === FIRST_PLAYER_SYMBOL &&
            this.matrix[1][1] === FIRST_PLAYER_SYMBOL &&
            this.matrix[2][1] === FIRST_PLAYER_SYMBOL
        ) {
            this.winner = true
            return FIRST_PLAYER_SYMBOL
        }
        if(
            this.matrix[0][1] === SECOND_PLAYER_SYMBOL &&
            this.matrix[1][1] === SECOND_PLAYER_SYMBOL &&
            this.matrix[2][1] === SECOND_PLAYER_SYMBOL
        ) {
            this.winner = true
            return SECOND_PLAYER_SYMBOL
        }

        if(this.matrix[0][2] === SECOND_PLAYER_SYMBOL &&
            this.matrix[1][2] === SECOND_PLAYER_SYMBOL &&
            this.matrix[2][2] === SECOND_PLAYER_SYMBOL
        ) {
            this.winner = true
            return SECOND_PLAYER_SYMBOL
        }
        if(
            this.matrix[0][2] === FIRST_PLAYER_SYMBOL &&
            this.matrix[1][2] === FIRST_PLAYER_SYMBOL &&
            this.matrix[2][2] === FIRST_PLAYER_SYMBOL
        ) {
            this.winner = true
            return FIRST_PLAYER_SYMBOL
        }

        // diagonal
        if(
            this.matrix[0][0] === FIRST_PLAYER_SYMBOL &&
            this.matrix[1][1] === FIRST_PLAYER_SYMBOL &&
            this.matrix[2][2] === FIRST_PLAYER_SYMBOL)
        {
            this.winner = true
            return FIRST_PLAYER_SYMBOL
        }
        if(
            this.matrix[0][0] === SECOND_PLAYER_SYMBOL &&
            this.matrix[1][1] === SECOND_PLAYER_SYMBOL &&
            this.matrix[2][2] === SECOND_PLAYER_SYMBOL)
        {
            this.winner = true
            return SECOND_PLAYER_SYMBOL
        }
        if(
            this.matrix[0][2] === SECOND_PLAYER_SYMBOL &&
            this.matrix[1][1] === SECOND_PLAYER_SYMBOL &&
            this.matrix[2][0] === SECOND_PLAYER_SYMBOL
        ) {
            this.winner = true
            return SECOND_PLAYER_SYMBOL
        }
        if(
            this.matrix[0][2] === FIRST_PLAYER_SYMBOL &&
            this.matrix[1][1] === FIRST_PLAYER_SYMBOL &&
            this.matrix[2][0] === FIRST_PLAYER_SYMBOL
        ) {
            this.winner = true
            return FIRST_PLAYER_SYMBOL
        }

        return null
    }

    noMoreTurns() {
        let flag = true
        for(let matrix in this.matrix) {
            if(flag) {
              flag = !this.matrix[matrix].some(el => el === null)
            }
        }
        return flag
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex < 0 || rowIndex > 2) {
            return null;
        }
        if (colIndex < 0 || colIndex > 2) {
            return null;
        }
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
