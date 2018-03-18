var game;
var player_images = [];
var input_keys = [];

window.onload = function() {
	game = new Phaser.Game(1024, 900, Phaser.AUTO, '', { preload: preload, create: create, update: update });
}

function preload () {
	game.load.image('ready_front', 'img/player/ready_front.png');
	game.load.image('up_L', 'img/player/up_L.png');
	game.load.image('up_R', 'img/player/up_R.png');
	game.load.image('straight_up', 'img/player/ready_front.png');
	game.load.image('down_R', 'img/player/down_R.png');
	game.load.image('down_L', 'img/player/down_L.png');
	game.load.image('straight_down', 'img/player/ready_front.png');
	//game.load.image('up_R', 'img/player/up_R.png');
}

function create () {
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'ready_front'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'down_L'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'straight_down'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'down_R'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'ready_front'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'ready_front'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'ready_front'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'up_L'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'straight_up'));
	player_images.push(game.add.sprite(game.world.centerX, game.world.centerY, 'up_R'));
	
	for (i = 0; i < player_images.length; i++) {
		player_images[i].anchor.setTo(0.5, 0.5);
		if (i > 0) {
			player_images[i].visible = false;		
		}	
	}
	
	for (key = Phaser.Keyboard.ZERO; key <= Phaser.Keyboard.NINE; key++) {
		input_keys.push(game.input.keyboard.addKey(key));	
	}
	
}

function update() {
	var anydown = false;
	for (key = 1; key <input_keys.length; key++) {
		if (input_keys[key].isDown) {
			player_images[key].visible = true;
			anydown = true;
		}	else {
			player_images[key].visible = false;
		}
	}
	if (anydown) {
		player_images[0].visible = false;	
	}	else {
		player_images[0].visible = true;		
	}	
}
