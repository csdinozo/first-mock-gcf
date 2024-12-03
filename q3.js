/**
 * Create a matrix of integers representing a grid paper
 * @param n {number} total rows
 * @param m {number} total columns
 * @param figures {array of strings} letters to include in design
 * @returns {array of numbers} representation of grid after figures are drawn
 * 
 * I skipped over this during the mock, so this is all from scratch
 * 
 * This took me a while: I thought I'd have to use an object to represent the figures but found out that wasn't necessary
 * 
 * When I first tried to create the matrix, I tried to use [m][n]
 *  - I think that format is applicable to Java but not here
 *  - Instead, I made an array of length `n` filled with zeroes
 *      - I mapped the values of this array to create new arrays of length `m` filled with zeroes
 * 
 * Next, I iterated through `figures`, nesting loops to iterate through the rows and columns of matrix
 * My first attempt was overcomplicated:
 *  - I checked whether `found`, my variable representing whether a position for the given figure was found, was true more often than needed
 *      - the value of `found` needs to be checked in the conditionals of the loops for `r` and `c` values (row and column indices)
 *          - If `found` is true, it is no longer necessary to check for available positions for the given figure
 * The rest of my solution remained the same:
 *  - Ensure that, for the given figure, enough positions are available
 *      - If the required positions all contain zero, set the value of each position to the index of the figure in `figures` plus one
 *  - Once all figures have been placed, return the representation of the grid
 */
function solution(n, m, figures) {
    let matrix = new Array(n).fill(0).map(() => new Array(m).fill(0));

    for (let f = 0; f < figures.length; f++) {
        let fig = figures[f];
        let found = false;
        
        for (let r = 0; r < n && !found; r++) {
            for (let c = 0; c < m && !found; c++) {
                if (fig === "A" && matrix[r][c] === 0) {
                    matrix[r][c] = f + 1;
                    found = true;
                }
                else if (fig === "B" && c + 2 < m && matrix[r][c] === 0 && matrix[r][c + 1] === 0 && matrix[r][c + 2] === 0) {
                    matrix[r][c] = f + 1;
                    matrix[r][c + 1] = f + 1;
                    matrix[r][c + 2] = f + 1;
                    found = true;
                }
                else if (fig === "C" && r + 1 < n && c + 1 < m) {
                    if (matrix[r][c] === 0 && matrix[r][c + 1] === 0 && matrix[r + 1][c] === 0 && matrix[r + 1][c + 1] === 0) {
                        matrix[r][c] = f + 1;
                        matrix[r][c + 1] = f + 1;
                        matrix[r + 1][c] = f + 1;
                        matrix[r + 1][c + 1] = f + 1;
                        found = true;
                    }
                }
                else if (fig === "D" && r + 2 < n && c + 1 < m) {
                    if (matrix[r][c] === 0 && matrix[r + 1][c] === 0 && matrix[r + 1][c + 1] === 0 && matrix[r + 2][c] === 0) {
                        matrix[r][c] = f + 1;
                        matrix[r + 1][c] = f + 1;
                        matrix[r + 1][c + 1] = f + 1;
                        matrix[r + 2][c] = f + 1;
                        found = true;
                    }
                }
                else if (fig === "E" && r + 1 < n && c + 2 < m) {
                    if (matrix[r][c + 1] === 0 && matrix[r + 1][c] === 0 && matrix[r + 1][c + 1] === 0 && matrix[r + 1][c + 2] === 0) {
                        matrix[r][c + 1] = f + 1;
                        matrix[r + 1][c] = f + 1;
                        matrix[r + 1][c + 1] = f + 1;
                        matrix[r + 1][c + 2] = f + 1;
                        found = true;
                    }
                }
            }
        }
    }
    
    return matrix;
}
