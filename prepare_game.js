function prepareGame() {
    var board = new drawBoard(20);
    var player1 = new Player('Player1');
    var player2 = new Player('Player2');
    startGame(board, player1, player2);
}


function drawBoard(cells) {
    this.cells = cells

    for(cell=0; cell < cells; cell++) {
        $('.active').after('<td></td>');
    };
}


function Player(player_name) {
    this.player_name = player_name;
    this.position = 0
}







