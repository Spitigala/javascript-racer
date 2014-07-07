function startGame (cell_count, player1, player2) {

    var player1_position = player1.position
    var player2_position = player2.position

    function updatePlayerPosition(player_number, position){
        $("#player"+player_number+"_strip td").removeClass();
        $("#player"+player_number+"_strip td").eq(position).addClass("active");
    };

    $("body").keyup(function(e){
        var keycode = (e.keyCode ? event.keyCode : event.which);

        if (keycode == 65 && player1_position < cell_count) {
            player1_position += 1;
            updatePlayerPosition(1, player1_position);
        }

        if (keycode == 76 && player2_position < cell_count) {
            player2_position += 1;
            updatePlayerPosition(2, player2_position);
        }

        if (player1_position == cell_count) {
            alert(player1.player_name + ' wins');
        }
	        
        if (player2_position == cell_count) {
            alert(Player2.player_name + ' wins');
        }
    });
}
