class paper{
	constructor(x,y,r)
	{
		var options={
			restitution :1,
            friction :1,
			}
	
		
		this.body=Bodies.circle(x, y,r, options)
		this.x=x;
		this.y=y;
		this.r=r
		World.add(world, this.body);

	}

	display()
	{
		var paperPos=this.body.position;	
		push()
		translate(paperPos.x, paperPos.y);
		
		rotate(this.body.angle)
		fill(255,0,255)
		ellipseMode(RADIUS);
		ellipse(this.body,0,0,this.r,this.r)
		pop()
 }
}