let planets=[]

var sun;

function preload(){
  sunImg = loadImage("Sun.png");
}

function setup(){

  var canvas = createCanvas(800,800);

  sun = createSprite(0,0);
  sun.addImage("Sun",sunImg);
  sun.scale = 0.1;

  let mercury_color = color(255,237,201);
  let venus_color = color(139,125,130);
  let earth_color = color(47,82,229);
  let mars_color = color(193,68,14);
  let jupiter_color = color(211, 156, 126);
  
  mercury = new Planet(12,66,5,mercury_color);
  venus = new Planet(19,108,3.5,venus_color);
  earth = new Planet(27,150,3,earth_color);
  mars = new Planet(24,237,2.4,mars_color);
  jupiter = new Planet(50,390,4.8,jupiter_color);
  
  planets =[mercury,venus,earth,mars,jupiter];

}

function draw(){
  
    background("black");
    translate(width/2,height/2);
    fill("yellow");
    noStroke();

    for(i in planets){
        planets[i].display();
        planets[i].orbit();
    }

    if(World.frameCount % 1 === 0){
      sun.scale = sun.scale + 0.0003;
    }

    drawSprites();
}
