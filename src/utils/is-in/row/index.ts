import { GRID, NUMBERS } from 'typings'

interface IINPUT {
    grid: GRID,
    row: number,
    value: NUMBERS
}

/**
 * a function that returns true if the value is already being used in the current row
 * @param input Oject with 9x9 Sudoku grid, row index, value
 */

function isInRow({ grid, row, value}: IINPUT ): boolean {
    return grid[row].includes(value)
}

export default isInRow
