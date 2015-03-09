Candy.MainMenu = function(game){};
Candy.MainMenu.prototype = {
	create: function(){
		// display images
        
		this.add.sprite(0,0,"phaser");
		
        
        //Init Game
        //this.startGame();
	},
	startGame: function() {
		// start the Game state
		this.state.start('Game');
	}
};