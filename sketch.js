var player;
var monsters = [];
var zoom = 1;


function setup() {
    createCanvas(600, 600);
    player = new Blob(0,0,64); 
	
	for (var i = 0; i < 200; i++) { 
		var x = random(-width, width)
		var y = random(-height, height)
		monsters[i] = new Blob(x,y,random(50)); 
		
		//var distance = dist(current.r, other.r);
		//x = random(-width, width)
		//y = random(-height, height)
		//monsters[i] = new Blob(x,y,16); 
	
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
			//monsters.push(new monster(random(-width, width),random(-height, height), player.r * 2));
		}
		//for (var j = 0;  j < monsters.length; j++) {

		//	if (i == j || (i -1) == j ) {
					continue;
		//	}

		//	if (monsters[i].intersects(monsters[j])) {
				//monsters[i].show();
		//	}
		//}
	}

		//var distance = p5.Vector.dist(this.pos,o




	player.show();
	player.update();
}