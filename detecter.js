const r = require("raylib");

function isDetectorOutOfBound(start, width, min, max) {
    const end = start + width;
    return start < min || end > max
}

function calcVelocity(start, width, min, max, velocity) {
    return isDetectorOutOfBound(start, width, min, max) ? -velocity : velocity;
}

module.exports = {
    isDetectorOutOfBound,
    calcVelocity,
}