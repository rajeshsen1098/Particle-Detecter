const w = require("./windowsProperty")

let startX = w.WIN_WIDTH / 2;
const startY = 0;

const width = 20;
const height = w.WIN_HEIGHT;

let velocity = 2;
let detected = false;
const lower = w.WIN_WIDTH / 2;
const upper = w.WIN_WIDTH;

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