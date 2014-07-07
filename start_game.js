function startGame (board, player1, player2) {

    var player1_position = player1.position
    var player2_position = player2.position

    function update_player_position(player, position){
        $("#player"+player+"_strip td").removeClass();
        $("#player"+player+"_strip td").eq(position).addClass("active");
    };

    $("body").keyup(function(e){
        var keycode = (e.keyCode ? event.keyCode : event.which);

        if (keycode == 65 && player1_position < board.cells) {
            player1_position += 1;
            update_player_position(1, player1_position);
        }

        if (keycode == 76 && player2_position < board.cells) {
            player2_position += 1;
            update_player_position(2, player2_position);
        }

        if (player1_position == board.cells) {
            alert('Player 1 wins');
        }
	        
        if (player2_position == board.cells) {
            alert('Player 2 wins');
        }
    });
}
