class Snow{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        
        this.radius = 30;
        this.image = loadImage("snow3.jpg");
        World.add(world, this.snow3);
    }

    updateY(){     
        if(this.snow3.position.y > height){

            Matter.Body.setPosition(this.snow3, {x:random(0,800), y:random(0,800)})
        }
    }

    showSnow3(){
        imageMode(CENTER);
        image(this.image,this.snow3.posit0ion.x,this.snow3.position.y,this.radius,this.radius);
    }
}
