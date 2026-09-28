const w = require("./windowsProperty")

let startX = 0;
const startY =0;

const width = w.WIN_WIDTH;
const height =40;

let velocity = 4;
let detected = false;
const lower = 0;
const upper = w.WIN_HEIGHT;

module.exports = {
    startX,
    width,
    velocity,
    detected,
    lower,
    upper,
    startY,
    height,
}