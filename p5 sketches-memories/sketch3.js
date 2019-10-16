let particles = [];


function setup(){
    createCanvas(windowWidth,windowHeight);
}

function mousePressed(){
    particles.push(new Particle(mouseX, mouseY));
    if(particles.length>5){
        particles.splice(0,1);
    }
}

function draw(){
    background(0);
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

        for (let i=0;i< this.memory.length;i++){
            this.memory[i].x +=random(-20,20);
            this.memory[i].y +=random(-20,20);
        }

        this.x = constrain(this.x, 0, windowWidth);
        this.y = constrain(this.y, 0, windowHeight);

        let v=createVector(this.x,this.y); 
        this.memory.push(v);

        if(this.memory.length>150){
            this.memory.splice(0,1);
        }
    }
    
    this.show=function(){
        noStroke();
        fill(0,255,0);
        ellipse(this.x,this.y,1,1);

        
        beginShape();
        for(let i=0;i<this.memory.length;i++){
            let pos=this.memory[i];
            fill(noise(i)*random(255),noise(i)*(255),noise(i)*random(255));
            //ellipse(pos.x,pos.y,i,i);
            vertex(pos.x,pos.y);
        }
        endShape();
    }
}

