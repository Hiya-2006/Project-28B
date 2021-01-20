class mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
    }
		this.x=x;
		this.y=y;
		this.r=r;
	
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
        this.image = loadImage("mango.png");


	}
	display()
	{
			
				

		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill("yellow")
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
			
	}

}