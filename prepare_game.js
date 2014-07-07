function prepareGame() {
    var cell_count = 20
    var board = new drawBoard(cell_count);
    var player1 = new Player('Player1');
    var player2 = new Player('Player2');
    startGame(cell_count, player1, player2);
}


function drawBoard(cell_count) {
    for(cell=0; cell < cell_count; cell++) {
        $('.active').after('<td></td>');
    };
}


function Player(player_name) {
    this.player_name = player_name;
    this.position = 0
}







