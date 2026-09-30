const r = require("raylib");

function isDetectorOutOfBound(start, width, min, max) {
    const end = start + width;
    // console.log(start < min || end > max)
    return start < min || end > max
}

function calcVelocity(start, width, min, max, velocity) {
        // console.log(velocity);

    return isDetectorOutOfBound(start, width, min, max) ? -velocity : velocity;
}

module.exports = {
    isDetectorOutOfBound,
    calcVelocity,
}