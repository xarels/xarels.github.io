function Blob(x,y,r) {
     this.pos = createVector(x,y)
     this.r = r;
	 this.velocity = createVector(0,0);

	this.update = function() {
		var newVelocity = createVector(mouseX-width/2, mouseY-height/2);
		newVelocity.setMag(3);
		this.velocity.lerp(newVelocity, 0.2)
		this.pos.add(this.velocity);
	}

	this.eats = function(other) {
		var distance = p5.Vector.dist(this.pos,other.pos);
		if (distance < this.r + other.r){
			var sum = (PI * this.r * this.r) + (PI * other.r * other.r);
			this.r = sqrt(sum/PI);
			//this.r += other.r;
			return true;
		} else {
			return false;
		}
	}

     this.show = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
     }
}