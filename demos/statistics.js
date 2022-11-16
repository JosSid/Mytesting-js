export const avg = function(array) {
    return array.reduce((prev, curr) => (prev + curr), 0) / array.length;
};

export const stdDev = function(array) {
    const mean = avg(array);
    const diffArr = array.map(el => (el - mean)*(el - mean));
    return Math.sqrt(avg(diffArr));
};