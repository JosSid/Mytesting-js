import {avg} from './avg.js'

export const stdDev = function(array) {
    const mean = avg(array);
    const diffArr = array.map(el => (el - mean)*(el - mean));
    return Math.sqrt(avg(diffArr));
};