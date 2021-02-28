import { GRID, NUMBERS } from 'typings'
import { 
    checkGrid,
    identifySquare, 
    isInCol, 
    isInRow, 
    isInSquare, 
    shuffle 
} from 'utils'

const gridExample: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

/**  Backtracking/Recursive algorithm to check all possible solutions **/

function fillGrid(grid: GRID) {
    let row = 0
    let col = 0 

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9)
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)
            
            for (let value of numbers) {
                //is it not in the grid row? 
                if (!isInRow({ grid, row, value })) 
                //is it not in the grid column?
                    if (!isInCol({ col, grid, value})) {
                      
                        const square = identifySquare({col, grid, row})
                        //is it not in the grid square?
                        if (!isInSquare({ square, value }))
                        //........ if all conditions listed above are true, place value in square
                        grid[row][col] = value
                        //check if grid is full, if yes, stop and return true
                        if (checkGrid(grid)) return true
                        //otherwise run fillGrid(grid)
                        else if (fillGrid(grid)) return true
                    }
            }
           
            break
        }
    }

    grid[row][col] = 0
}

export default fillGrid