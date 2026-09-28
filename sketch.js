const r = require("raylib");
const g = require("./geometry");
const d1 = require("./detector1");
const d2 = require("./detector2");
const d3 = require("./detector3")

const w = require("./windowsProperty")
const d = require("./detecter");
const p1 = require("./particle1");
const p2 = require("./particle2");
const p3 = require("./particle3");

const BG = r.BLACK;
const SC_DEFAULT = r.WHITE;
const SC_DETECTED = r.ColorAlpha(r.RED, .7);
const P_COLOR = r.SKYBLUE;


function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.WIN_WIDTH, w.WIN_HEIGHT, w.TITLE);
    r.SetTargetFPS(w.WIN_FPS);
    r.SetWindowPosition(w.WIN_POSITION_X, w.WIN_POSITION_Y);
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

function update() {
    d1.velocity = d.calcVelocity(d1.startX, d1.width, d1.lower, d1.upper, d1.velocity);
    d1.startX += d1.velocity;

    d2.velocity = d.calcVelocity(d2.startX, d2.width, d2.lower, d2.upper, d2.velocity);
    d2.startX += d2.velocity;

    d3.velocity = d.calcVelocity(d3.startY, d3.height, d3.lower, d3.upper, d3.velocity);
    d3.startY += d3.velocity;

    d1.detected = doesDetectorOverlap(d1, p1.startX, p1.width, p2.startX, p2.width);
    d2.detected = doesDetectorOverlap(d2, p1.startX, p1.width, p2.startX, p2.width);

    d3.detected = g.isOverlap(d3.startY, d3.height, p3.startY, p3.height);;

}
function doesDetectorOverlap(detector) {
    return g.isOverlap(detector.startX, detector.width, p1.startX, p1.width)
        || g.isOverlap(detector.startX, detector.width, p2.startX, p2.width);
}

function setColor(detected) {
    return detected ? SC_DETECTED : SC_DEFAULT;
}
function drawRange(start, width, color) {
    r.DrawRectangle(start, 0, width, w.WIN_HEIGHT, color)
}

function drawRange(rec, color) {
    r.DrawRectangle(rec.startX, rec.startY, rec.width, rec.height, color)
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(BG);

    drawRange(p1, P_COLOR);
    drawRange(p2, P_COLOR);
    drawRange(p3, P_COLOR);

    drawRange(d1, setColor(d1.detected));
    drawRange(d2, setColor(d2.detected));
    drawRange(d3, setColor(d3.detected));


    r.EndDrawing();

}

module.exports = {
    setup,
    draw,
    running,
    teardown,
    update,
}