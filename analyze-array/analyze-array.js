"use strict";

function analyzeArray(arr) {
    const average = arr.reduce((accum, curr) => accum + curr, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return {
        average,
        min,
        max,
        length
    }
}

module.exports = analyzeArray;