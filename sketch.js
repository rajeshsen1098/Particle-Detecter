const r = require("raylib");
const w = require("./windowsProperty");

const df = require("./detecterFunctions");
const g = require("./geometry");

const dt = require("./detectors");
const p = require("./particles");

const d1 = dt.detecter.d1;
const d2 = dt.detecter.d2;
const d3 = dt.detecter.d3;

const p1 = p.particle.p1;
const p2 = p.particle.p2;
const p3 = p.particle.p3;

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
function updateParticleColor(...p) {

    w.colors.P_COLOR.b = w.colors.P_COLOR.b % 255 === 0 ? 4 : w.colors.P_COLOR.b + 1;
}

function update() {
    updateParticleColor(p1, p2, p3);
    d1.v = df.calcVelocity(d1.x, d1.w, d1.l, d1.u, d1.v);
    d1.x += d1.v;
    d2.v = df.calcVelocity(d2.x, d2.w, d2.l, d2.u, d2.v);
    d2.x += d2.v;
    d3.v = df.calcVelocity(d3.y, d3.h, d3.l, d3.u, d3.v);
    d3.y += d3.v;

    d1.detected = doesDetectorOverlap(d1, p1.x, p1.w, p2.x, p2.w);
    d2.detected = doesDetectorOverlap(d2, p1.x, p1.w, p2.x, p2.w);
    d3.detected = g.isOverlap(d3.y, d3.h, p3.y, p3.h);

}
function doesDetectorOverlap(detector, a, b, c, d) {
    return g.isOverlap(detector.x, detector.w, a, b)
        || g.isOverlap(detector.x, detector.w, c, d);
}

function setColor(detected) {
    return detected ? w.colors.SC_DETECTED : w.colors.SC_DEFAULT;
}

function drawRange(rec, color) {
    r.DrawRectangle(rec.x, rec.y, rec.w, rec.h, color)
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(w.colors.BG);

    drawRange(p1, w.colors.P_COLOR);
    drawRange(p2, w.colors.P_COLOR);
    drawRange(p3, w.colors.P_COLOR);

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