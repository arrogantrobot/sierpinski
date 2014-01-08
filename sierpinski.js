function sierpinski() {
  var canvasId;
  var canvas;
  var speed;
  var numDots;
  var width;
  var height;
  var vertices;
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
    alert("Vertex: " + vertices[vertex].x.toString() +", "+ vertices[vertex].y.toString());
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
    point.x = Math.floor((point.x + vertices[vertex].x)/2);
    point.y = Math.floor((point.y + vertices[vertex].y)/2);
    //alertPoints(vertex);
    drawPoint();
  }

  this.start = function() {
    setInterval(function(){iterate()}, 1);

  }

  var addVertex = function(name, x, y) {
    vertices[name] = new Object();
    vertices[name]['x'] = x;
    vertices.a['y'] = y;
  }

  var setVertices = function(num) {
    vertices = new Object();
    if (num == 3) {
      addVertex('a', 0, height); 
      addVertex('b', Math.floor(width /2), 0); 
      addVertex('c', width, height); 
    }

  }

  this.init = function(canvas) {
    canvasId = canvas;
    setCanvasId(canvasId);
    setVertices(3);

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
