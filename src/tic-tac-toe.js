class TicTacToe {
        constructor() {
            this.newField = this.createField(3, 3);
            this.player = null;
            this.filled = 0;
     
            this.makeTurn();
        }
     
        createField(rows, columns) {
            var arr = new Array();
     
            for (var i = 0; i < columns; i++)
            {
                arr[i] = new Array();
     
                for (var j = 0; j < rows; j++)
                {
                    arr[i][j] = null;
                }
            }
     
            return arr;
        }
     
        makeTurn() {
            if (this.player == null || this.player == 'o') this.player = 'x';
     
            else this.player = 'o';
        }
     
        getCurrentPlayerSymbol() {
            return this.player;
        }
     
        nextTurn(rowIndex, columnIndex) {
            if (!this.getFieldValue(rowIndex, columnIndex))
            {
                this.newField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
     
                this.makeTurn();
     
                this.filled++;
            }
        }
     
        isFinished() {
            let horiz = 0;
            
            for (let i = 0; i < this.newField.length; i++)
            {
                let first_horiz = this.getFieldValue(i, 0);
     
                for (let j = 0; j < this.newField[i].length; j++)
                {
                    if (this.getFieldValue(i, j) === first_horiz &&
                        first_horiz !== null) horiz++;
                }
     
                if (horiz === 3)
                {
                    this.makeTurn();
     
                    this.winner = this.player;
     
                    this.makeTurn();
     
                    return true;
                }
     
                else horiz = 0;
            }
     
            let vert_values = new Array();
     
            for (let j = 0; j < this.newField.length; j++)
            {
                vert_values[j] = new Array();
     
                vert_values[j][0] = this.getFieldValue(0, j);
                vert_values[j][1] = 0;
            }
     
            for (let i = 1; i < this.newField.length; i++)
            {
                for (let j = 0; j < this.newField[i].length; j++)
                {
                    if (this.getFieldValue(i, j) === vert_values[j][0]
                        && this.getFieldValue(i, j) !== null) vert_values[j][1]++;
     
                    if (vert_values[j][1] === 2)
                    {
                        this.makeTurn();
     
                        this.winner = this.player;
     
                        this.makeTurn();
     
                        return true;
                    }
                }
            }
     
            if (this.getFieldValue (1, 1) !== null &&
                (this.getFieldValue(0, 0) === this.getFieldValue(1, 1) &&
                this.getFieldValue(0, 0) === this.getFieldValue(2, 2) &&
                this.getFieldValue(0, 0) !== null && this.getFieldValue(2, 2) !== null) ||
                (this.getFieldValue(0, 2) === this.getFieldValue(1, 1) &&
                this.getFieldValue(0, 2) === this.getFieldValue(2, 0) &&
                this.getFieldValue(0, 2) !== null && this.getFieldValue(2, 0) !== null))
            {
                this.makeTurn();
     
                this.winner = this.player;
     
                this.makeTurn();
     
                return true;
            }
     
            if (this.noMoreTurns())
            {
                this.winner = null;
     
                return true;
            }
     
            return false;
        }
     
        getWinner() {
            if (!this.isFinished()) return null;
     
            return this.winner;
        }
     
        noMoreTurns() {
            return this.filled === 9;
        }
     
        isDraw() {
            if (this.isFinished() && !this.getWinner())
            {
                return true;
            }
     
            return false;
        }
     
        getFieldValue(rowIndex, colIndex) {
            return this.newField[rowIndex][colIndex];
        }
    }
     
module.exports = TicTacToe;
