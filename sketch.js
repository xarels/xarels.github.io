var player;
var monsters = [];
var zoom = 1;


function setup() {
    createCanvas(600, 600);
    player = new Blob(0,0,64); 
	
	for (var i = 0; i < 200; i++) { 
		var x = random(-width, width)
		var y = random(-height, height)
		monsters[i] = new Blob(x,y,16); 
	}
}

function draw() {
    background(0);

	translate(width/2,height/2);
	var newZoom = 64 / player.r;
	zoom = lerp(zoom,newZoom, 0.1); // interpolation
	scale(zoom);
	translate(-player.pos.x,-player.pos.y);

	for (var i = monsters.length-1; i >= 0; i--) {
		monsters[i].show();
		if(player.eats(monsters[i])){
			monsters.splice(i,1);
		}
	}

	player.show();
	player.update();
}