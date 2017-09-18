class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.gameMatrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameMatrix[rowIndex][columnIndex] == null){
            this.gameMatrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if(this.getCurrentPlayerSymbol() == 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            }
        }
    }

    isFinished() {
        if(this.noMoreTurns() == true || this.getWinner() != null) {
            return true
        } else {
            return false
        }
    }

    getWinner() {
        for (let i = 0; i <= 2; i++) {
            if (this.gameMatrix[i][0] != null) {
                 if (this.gameMatrix[i][0] == this.gameMatrix[i][1] && this.gameMatrix[i][0] == this.gameMatrix[i][2]) {
                      return this.gameMatrix[i][0];
                 }
            }
            if (this.gameMatrix[0][i] != null) {
                 if (this.gameMatrix[0][i] == this.gameMatrix[1][i] && this.gameMatrix[0][i] == this.gameMatrix[2][i]) {
                      return this.gameMatrix[0][i];
                 }
            }
       }
        if (this.gameMatrix[1][1] != null) {
            if (this.gameMatrix[0][0] != null) {
                if (this.gameMatrix[0][0] == this.gameMatrix[1][1] && this.gameMatrix[0][0] == this.gameMatrix[2][2]) {
                    return this.gameMatrix[0][0];
                }
            }
            if (this.gameMatrix[0][2] != null) {
                if (this.gameMatrix[0][2] == this.gameMatrix[1][1] && this.gameMatrix[0][2] == this.gameMatrix[2][0]) {
                    return this.gameMatrix[0][2];
                }
            }
        }
       return null;
    }

    noMoreTurns() {
        for (let rowIndex = 0; rowIndex <= 2; rowIndex++) {
            for (let columnIndex = 0; columnIndex <= 2; columnIndex++) {
                 if (this.gameMatrix[rowIndex][columnIndex] == null) {
                      return false;
                 }
            }
       }
       return true;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) {
            return true;
       } else {
            return false;
       }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameMatrix[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
