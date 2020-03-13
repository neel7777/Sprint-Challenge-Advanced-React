import React from 'react';
import Cards from './Cards'
import styled from 'styled-components'

const Each = styled.div `
display: flex;
flex-flow: row wrap;
justify-content: space between;


width: 100%;
`

const Players =  props  => {
    
    return (
        <Each>
            {props.players.map(item => (
                <Cards 
                key={item.id}
                person={item}
                />
            ))}
            
        </Each>
    )

}

export default Players;