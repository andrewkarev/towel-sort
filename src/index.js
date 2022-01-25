
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let matrixSort = matrix
    let result = []

    if (matrix != undefined) {
        for (let i = 1; i < matrix.length; i += 2) {
            matrixSort[i].reverse()
        }

        for (let elem of matrixSort) {
            for (let value of elem) {
                result.push(value)
            }
        }

        return result
    }
    return []
}
