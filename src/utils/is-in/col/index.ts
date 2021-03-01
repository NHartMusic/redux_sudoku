import { GRID, NUMBERS } from 'typings'

interface IINPUT {
    col: number,
    grid: GRID,
    value: NUMBERS
}

/**
 * a function that returns true if the value is already being used in the current column
 * @param input Oject with 9x9 Sudoku grid, column index, value
 */

function isInCol({ col, grid, value }: IINPUT): boolean {
    for (let i = 0; i < 9; i++) if (value === grid[i][col]) return true
    return false
}

export default isInCol