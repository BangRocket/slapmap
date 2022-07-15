
    const steps = 25

    const colors = ['#003049', '#D62828', '#F77F00', '#FCBF49', '#EAE2B7'];

    function setup() {
        createCanvas(700, 700);
        background(255);
        stroke(0);
        strokeWeight(1);
        strokeJoin(BEVEL);
        noLoop();
        rectMode(CENTER);
    }

    function draw() {
        const matrix = [];

        const s = width / steps;

        for (let i = 0; i <= steps; i++) {
            const l = [];
            for (let j = 0; j <= steps; j++) {
                const x = map(i, 0, steps, 0, width) + (j % 2 == 0 ? - s / 2 : 0) + lerp(-1, 1, random()) * s / 3; 
                const y = map(j, 0, steps, 0, height) + lerp(-1, 1, random()) * s / 3; 
                l.push({ x, y });
                //strokeWeight(10);
                //point(x, y);
            }
            matrix.push(l);
    
        }

        console.log(matrix)

        for (let i = 0; i <= steps - 1; i++) {
            for (let j = 0; j <= steps - 1; j++) {
                noFill();
                strokeWeight(1);
                fill(colors[floor(random() * colors.length)]);
                
                let direction = Math.round(random());

                triangle(
                    matrix[j][i].x, matrix[j][i].y,
                    matrix[j + 1][i].x, matrix[j + 1][i].y,
                    matrix[j + (direction ? 1 : 0)][i + 1].x, matrix[j + (direction ? 1 : 0)][i + 1].y
                );

                fill(colors[floor(random() * colors.length)]);
                triangle(
                    matrix[j + (direction ? 0 : 1)][i].x, matrix[j + (direction ? 0 : 1)][i].y,
                    matrix[j][i + 1].x, matrix[j][i + 1].y,
                    matrix[j + 1][i + 1].x, matrix[j + 1][i + 1].y
                );
            }
        }
    }