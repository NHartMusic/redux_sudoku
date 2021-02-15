import React, { FC } from 'react'

const Grid: FC = () => {
    return (
        <div data-cy='grid-container'>
            {React.Children.toArray([...Array(9)].map((_, rowIndex) => (
            <div data-cy='grid-row-container' key={rowIndex}>
               {React.Children.toArray([...Array(9)].map((_, colIndex) => (
                   <div data-cy="block"></div>
               )))}
            </div>
        )))}
        </div>
    )
}

export default Grid
