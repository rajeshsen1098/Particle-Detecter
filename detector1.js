const w = require("./windowsProperty")

let startX = 0;
const startY = 0;

const width = 20;
const height = w.WIN_HEIGHT;
let velocity = 1;
let detected = false;

const movement = "horizontal";
const lower = 0;
const upper = w.WIN_WIDTH / 2;

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