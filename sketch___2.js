
var r = 40; 
var num = 10; 
Array speed = PI/150;
Array[] rot = new Array[num];
color[] indexColor = {#ABF200,#E4F7BA, #CEF279, #BCE55C, #9FC93C, #6B9900, #476600, #113000};


function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(255);
  translate(width/2, height/2);

  for (var n = num; n > 0; n--) {
    if(dist(width/2, height/2, mouseX, mouseY) < r*n && dist(width/2, height/2, mouseX, mouseY) > r*(n-1)){ 
      if(n%2 == 1) rot[n-1] += speed; 
      else rot[n-1] -= speed; 
    }
    rotate(rot[n-1]);
   
    Array[] value = new Array[n];
    Array[] radian = new Array[n];

    for (var i = 0; i < n; i++) {
      Array k = i;
      value[i] = k/n; 
      radian[i] = asin(value[i]); 
    }
     
    for (var i = 0; i < n; i++) {
      if (n%2 == 1) fill(indexColor[i%8]);
      else fill(indexColor[(i+4)%8]); 
      arc(0, 0, n*2*r, n*2*r, PI/2+radian[i], 3*PI/2-radian[i], CHORD); 
    }
    rotate(PI); 
   
    for (var i = 0; i < n; i++) {
      if (n%2 == 1) fill(indexColor[abs(7-i%8)]);
      else fill(indexColor[abs(7-(4+i)%8)]);
      arc(0, 0, n*2*r, n*2*r, PI/2+radian[i], 3*PI/2-radian[i], CHORD);
    }
    rotate(PI); 
   
    rotate(-rot[n-1]); 
  } 

}
