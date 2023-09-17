function setup() {
    createCanvas(windowWidth, windowHeight); 
    background (150,150,150);
    angleMode(DEGREES);
}

function draw() {
    stroke("white");
    fill (250,250,250);
    rect(0,0,550,650);

    push();
    fill("orange");
    translate(220,150);
    rotate(140);
    rect(0,0,100,60);
    pop();

    push();
    fill("purple");
    translate(70,305);
    rotate(232);
    rect(0,0,20,220);
    pop();

    push();
    fill("blacK");
    translate(120,330);
    rotate(230);
    quad(0,0,0,80,40,80,50,0);
    pop();

    push();
    fill("red");
    translate(150,400);
    rotate(235);
    rect(0,0,60,250);
    pop();

    push();
    strokeWeight(0);
    fill("blacK");
    translate(350,330);
    rotate(235);
    rect(0,0,60,140);
    pop();

    push();
    fill("orange");
    rect(300,360,150,150);
    pop();

}
