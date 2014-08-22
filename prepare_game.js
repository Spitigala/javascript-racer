function prepareGame() {
    var cellCount = 20;
    var board = new drawBoard(cellCount);
    var player1 = new Player('Player1');
    var player2 = new Player('Player2');
    startGame(cellCount, player1, player2);
}
 
 
function drawBoard(cellCount) {
    for(cell=0; cell < cellCount; cell++) {
        $('.active').after('<td></td>');
    }
}
 
 
function Player(playerName) {
    this.playerName = playerName;
    this.position = 0;
}








