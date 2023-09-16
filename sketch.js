function setup() {
    createCanvas(windowWidth, windowHeight); 
    background (150,150,150);
}

function draw() {
    stroke("white");
fill (250,250,250);
    rect(0,0,500,600);
    fill("orange");
    angleMode(degrees);
    rotate(100);
    rect(30,150,100,60);
    fill("black");
    rotate(25,10,200);
    rect(10,200,20,200);

}
