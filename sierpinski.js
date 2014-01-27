/*  This demonstrates a method for generating a sierpinski triangle.
 *  There are 3 points which form an equilateral triangle, vertex a, 
 *  b, and c. A point is drawn at a random location inside the triangle.
 *  Then one of the 3 vertices is selected at random, and second
 *  point is drawn half way between the first randomly chosen point
 *  and the vertex that was selected randomly. This process is 
 *  repeated, using the last point drawn as the starting point, and 
 *  a randomly selected vertex as the ending point. 
 *
 *  The shape that emerges from this stochastic process is a fractal.
 *  It has self-similarity at an level of zoom. Each triangluar
 *  region is composed of infinitely many smaller triangles. Since the
 *  points drawn must have some 2 dimensional size to be visible, they
 *  only approximate this object. So precision is limited first by 
 *  the size of the pixels on the screen, then by the precision of the
 *  floating point math of javascript.
 */
function sierpinski() {
  var canvasId;
  var canvas;
  var speed;
  var numDots;
  var width;
  var height;
  var triangle;
  var point;
  var timeBetweenDots = 100;

  var sizeCanvas = function() {
    if (window.innerWidth > window.innerHeight) {
      canvas.height = window.innerHeight;
      canvas.width = Math.floor(window.innerHeight * (100 / 88 ));
    } else {
      canvas.width = window.innerWidth;
      canvas.height = Math.floor(window.innerWidth * 0.88);
    }
  }

  var setCanvasId = function(id) {
    canvas = document.getElementById(id);
    sizeCanvas();
    width = canvas.width;
    height = canvas.height;
  }

  var drawPoint = function() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#000";
    context.fillRect(point['x'],point['y'],1,1);

  }

  var alertPoints = function(vertex) {
    alert("Point: " + point.x.toString() +", "+ point.y.toString());
    alert("Vertex: " + triangle[vertex].x.toString() +", "+ triangle[vertex].y.toString());
  }

  var iterate = function() {
    var vertex = Math.floor(Math.random() * 3)  ;
    if (vertex == 0) {
      vertex = "a";
    } else if (vertex == 1) {
      vertex = "b";
    } else {
      vertex = "c";
    }
    //alertPoints(vertex);
    point.x = Math.floor((point.x + triangle[vertex].x)/2);
    point.y = Math.floor((point.y + triangle[vertex].y)/2);
    //alertPoints(vertex);
    drawPoint();
  }

  this.start = function() {
    setInterval(function(){iterate()}, 1);

  }

  this.init = function(canvas) {
    canvasId = canvas;
    setCanvasId(canvasId);
    triangle = new Object();
    triangle['a'] = new Object();
    triangle.a['x'] = 0;
    triangle.a['y'] = height;
    
    triangle['b'] = new Object();
    triangle.b['x'] = Math.floor(width / 2);
    triangle.b['y'] = 0;

    triangle['c'] = new Object();
    triangle.c['x'] = width;
    triangle.c['y'] = height;

    point = new Object();
    point['x'] = width /2;
    point['y'] = height /2;
  }


}

function start() {
  var sierp = new sierpinski();
  sierp.init('mainCan');
  sierp.start();
}
