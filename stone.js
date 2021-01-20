class stone{ 
    constructor(x, y, r)
     { 
     var options = { 
      
     isStatic: false,
     restitution:0,
     friction:1,
     density:1.2
}
this.x=x;
this.y=y;
this.r=r

this.body=Bodies.circle(this.x, this.y, this.r/2, options)

World.add(world, this.body);
this.image=loadImage("stone.png");

             } 
             
             display(){ 
              var pos =this.body.position; 
            push ()
              fill("grey");
              rect(pos.x, pos.y, this.width, this.height); 
              imageMode(CENTER);
              ellipseMode(RADIUS)
              image(this.image, 20, 530, 50,50);
             pop ()  
            }
               };
			
             
            