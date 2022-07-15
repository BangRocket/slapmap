document.addEventListener("DOMContentLoaded", function() {
  var width = 500;
  var height = 500;

  var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
  });

  var layer = new Konva.Layer();

  var poly = new Konva.Line({
    points: [0,0,
              0,50,
              25,0],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
  });

  var poly2 = new Konva.Line({
    points: [25,0,
              25,50,
              0,50],
    fill: '#ee5533',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
  });

  var poly3 = new Konva.Line({
    points: [0,50, // 0,0
              0,100,  //0,50
              25,100], //25, 50 (-25?...)
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
  });

  var poly4 = new Konva.Line({
    points: [0,50, //0,0
              25,50, //25,0
              25,100], //25, 50
    fill: '#ee5533',
    stroke: 'black',
    strokeWidth: 1,
    closed: true,
  });

var alt1 = new Konva.Line({
  points: [25,0,
            25,50,
            50,50],
  fill: '#00D2FF',
  stroke: 'black',
  strokeWidth: 1,
  closed: true,
});

var alt2= new Konva.Line({
  points: [25,0,
            50,0,
            50,50],
  fill: '#ee5533',
  stroke: 'black',
  strokeWidth: 1,
  closed: true
});

  // add the shape to the layer
  layer.add(poly);
  layer.add(poly2);
  layer.add(poly3);
  layer.add(poly4);
  layer.add(alt1);  
  layer.add(alt2);
  
  // add the layer to the stage
  stage.add(layer);
})