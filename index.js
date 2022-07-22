import { map, lerp } from './utils.js'

document.addEventListener("DOMContentLoaded", function () {
	var width = 800;
	var height = 800;

	const steps = 25

	const colors = ['#003049', '#D62828', '#F77F00', '#FCBF49', '#EAE2B7'];

	var stage = new Konva.Stage({
		container: 'container',
		width: width,
		height: height,
	});

	const matrix = [];

	const s = width / steps;

	for (let i = 0; i <= steps; i++) {
		const line = [];
		for (let j = 0; j <= steps; j++) {
			const x = map(i, 0, steps, 0, width) + (j % 2 == 0 ? - s / 2 : 0) + lerp(-1, 1, Math.random()) * s / 3;
			const y = map(j, 0, steps, 0, height) + lerp(-1, 1, Math.random()) * s / 3;
			line.push({ x, y });
		}
		matrix.push(line);

	}

	console.log(matrix)

	var layer = new Konva.Layer();

	for (let i = 0; i <= steps; i++) {
		for (let j = 0; j <= steps; j++) {
			var circle = new Konva.Circle({
				x: matrix[j][i].x,
				y: matrix[j][i].y,
				radius: 1,
				fill: 'black'
			});
			layer.add(circle)
		}

	}

	var poly = new Konva.Line({
		points: [0, 0,
			0, 50,
			25, 0],
		fill: '#00D2FF',
		stroke: 'black',
		strokeWidth: 1,
		closed: true,
	});

	var poly2 = new Konva.Line({
		points: [25, 0,
			25, 50,
			0, 50],
		fill: '#ee5533',
		stroke: 'black',
		strokeWidth: 1,
		closed: true,
	});

	var poly3 = new Konva.Line({
		points: [0, 50, // 0,0
			0, 100,  //0,50
			25, 100], //25, 50 (-25?...)
		fill: '#00D2FF',
		stroke: 'black',
		strokeWidth: 1,
		closed: true,
	});

	var poly4 = new Konva.Line({
		points: [0, 50, //0,0
			25, 50, //25,0
			25, 100], //25, 50
		fill: '#ee5533',
		stroke: 'black',
		strokeWidth: 1,
		closed: true,
	});

	var alt1 = new Konva.Line({
		points: [25, 0,
			25, 50,
			50, 50],
		fill: '#00D2FF',
		stroke: 'black',
		strokeWidth: 1,
		closed: true,
	});

	var alt2 = new Konva.Line({
		points: [25, 0,
			50, 0,
			50, 50],
		fill: '#ee5533',
		stroke: 'black',
		strokeWidth: 1,
		closed: true
	});

	// add the shape to the layer
	// layer.add(poly);
	// layer.add(poly2);
	// layer.add(poly3);
	// layer.add(poly4);
	// layer.add(alt1);  
	// layer.add(alt2);

	// add the layer to the stage
	stage.add(layer);
})