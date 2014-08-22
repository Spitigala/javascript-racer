function startGame (cellCount, player1, player2) {
 
        var player1Position = player1.position;
        var player2Position = player2.position;
 
        function updatePlayerPosition(playerNumber, position) {
            $("#player"+playerNumber+"_strip td").removeClass();
            $("#player"+playerNumber+"_strip td").eq(position).addClass("active");
        }
 
        $("body").keyup(function(e){
            var keycode = (e.keyCode ? event.keyCode : event.which);
 
            if (keycode == 65 && player1Position < cellCount) {
                player1Position += 1;
                updatePlayerPosition(1, player1Position);
            }
 
            if (keycode == 76 && player2Position < cellCount) {
                player2Position += 1;
                updatePlayerPosition(2, player2Position);
            }
 
            if (player1Position == cellCount) {
                alert(player1.playerName + ' wins');
            }
 
            if (player2Position == cellCount) {
                alert(Player2.playerName + ' wins');
            }
        });
}
