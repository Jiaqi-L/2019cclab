let particles = [];


function setup(){
    createCanvas(windowWidth,windowHeight);
}

function mousePressed(){
    particles.push(new Particle(mouseX, mouseY));
    if(particles.length>30){
        particles.splice(0,1);
    }
}

function draw(){
    background(255,255,0);
    for(let i=0; i<particles.length; i++){
        particles[i].update();
        particles[i].show();
    }
}

function Particle(x,y){
    this.x=x;
    this.y=y;
    this.rate = 1;
    this.memory=[];

    this.update=function(){
        this.x +=random(-20,20)*this.rate;
        this.y +=random(-20,20)*this.rate;

       // for (let i=0;i<memory.length;i++){
       //      this.memory[i].x +=random(-2,2);
       //     this.memory[i].y +=random(-2,2);
       // }
        this.x = constrain(this.x, 0, windowWidth);
        this.y = constrain(this.y, 0, windowHeight);

        let v=createVector(this.x,this.y); 
        this.memory.push(v);

        if(this.memory.length>50){
            this.memory.splice(0,1);
        }
    }
    
    this.show=function(){
        noStroke();
        fill(150);
        ellipse(this.x,this.y,25,25);

        //noFill();
        //beginShape();
        for(let i=0;i<this.memory.length;i++){
            let pos=this.memory[i];
            fill(random(0),noise(i)*(255),random(0));
            ellipse(pos.x,pos.y,i,i);
           // vertex(pos.x,pos.y);
        }
        //endShape();
    }
}
