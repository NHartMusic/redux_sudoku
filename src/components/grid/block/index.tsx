import React, {FC} from 'react'

import { Container } from './styles'

interface IPROPS {
    colIndex: number,
    rowIndex: number
}

const Block: FC<IPROPS> = ({ colIndex, rowIndex}) => {
    return (
        <Container data-cy={`block-${rowIndex}-${colIndex}`}>0</Container> 
    )
}

export default Block
