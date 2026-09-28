const r = require("raylib");

function isOverlap(start1, width1, start2, width2) {
    const end1 = start1 + width1;
    const end2 = start2 + width2;

    return !(end2 < start1 || start2 > end1);
}

module.exports ={
    isOverlap,
}