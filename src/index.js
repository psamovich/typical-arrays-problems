exports.min = function min(array) {
    if (isNotValidParam(array)) {
        return 0;
    }
    return array.reduce((min, current) => Math.min(min, current));
};

exports.max = function max(array) {
    if (isNotValidParam(array)) {
        return 0;
    }
    return array.reduce((max, current) => Math.max(max, current));
}

exports.avg = function avg(array) {
    if (isNotValidParam(array)) {
        return 0;
    }
    return array.reduce((sum, current) => sum += current) / array.length;
}

function isNotValidParam(array) {
    return !array || array.length === 0;
}
