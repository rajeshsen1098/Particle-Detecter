const w = require("./windowsProperty")
const detecter = {
    d1: {
        x: 0,
        y: 0,

        w: 20,
        h: w.WIN_HEIGHT,

        v: 1,
        d: false,
        l: 0,
        u: w.WIN_WIDTH / 2,
    },
    d2: {
        x : w.WIN_WIDTH / 2,
        y : 0,
        w : 20,
        h : w.WIN_HEIGHT,
        v : 2,
        d : false,
        l : w.WIN_WIDTH / 2,
        u : w.WIN_WIDTH,
        
    },
    d3:{
        x : 0,
        y :0,
        w : w.WIN_WIDTH,
        h :40,
        v : 4,
        d : false,
        l : 0,
        u : w.WIN_HEIGHT,
    }
}


module.exports = {
   detecter,
}