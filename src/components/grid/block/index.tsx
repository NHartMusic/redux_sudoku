import React, {FC} from 'react'

interface IPROPS {
    colIndex: number,
    rowIndex: number
}

const Block: FC<IPROPS> = ({ colIndex, rowIndex}) => {
    return (
        <div data-cy="block">|{rowIndex}{colIndex}|</div>
    )
}

export default Block
