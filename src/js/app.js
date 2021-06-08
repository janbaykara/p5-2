// https://github.com/processing/p5.js/wiki/Global-and-instance-mode
import p5 from "p5";

const sketch = function (s) {
    const range = 2.0;
    const xmin = -range / 2;
    const xmax = range / 2;
    const ymin = -range / 2;
    const ymax = range / 2;
    let ratio = s.windowWidth / s.windowHeight;
    let scale = 0;

    s.setup = function () {
        s.createCanvas(s.windowWidth, s.windowHeight);
    };

    s.draw = function () {
        s.background(255);
        s.fill(0);
        s.stroke(0);
        s.push();
        s.set_coords();
        // Start drawing here...
        const steps = 2;
        for (let i = xmin; i <= xmax; i += range / steps) {
            s.line(i, ymax, i, ymin);
        }
        for (let j = ymin; j <= ymax; j += range / steps) {
            s.line(xmin, j, xmax, j);
        }
        // End drawing here...
        s.pop();
    };

    s.set_coords = function () {
        ratio = s.windowWidth / s.windowHeight;
        if (ratio >= 1.0) {
            scale = s.windowHeight / range;
        } else {
            scale = s.windowWidth / range;
        }
        s.translate(s.windowWidth / 2, s.windowHeight / 2);
        s.scale(scale);
        s.strokeWeight(1.0 / scale);
    };
};

const sketchInstance = new p5(sketch, document.getElementById("sketch"));
