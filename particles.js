const w = require("./windowsProperty");
const particle = {
    p1: {
        x: 500,
        y: 0,
        w: 60,
        h: w.WIN_HEIGHT,
    },
    p2: {
        x: 100,
        y: 0,
        w: 40,
        h: w.WIN_HEIGHT,
    },
    p3: {
        x: 0,
        y: 500,
        h: 60,
        w: w.WIN_WIDTH,
    }
}
module.exports = {
    particle,
}