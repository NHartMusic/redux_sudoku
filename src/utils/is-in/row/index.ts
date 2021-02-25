import { GRID, NUMBERS } from 'typings'

interface IINPUT {
    grid: GRID,
    row: number,
    value: NUMBERS
}

/* 
    Functin that returns true if value is already used in current grid row
*/

function isInRow({ grid, row, value}: IINPUT ): boolean {
    return grid[row].includes(value)
}

export default isInRow
