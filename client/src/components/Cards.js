import React from 'react';
import styled from'styled-components';

const Main=styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 18rem;
  margin: 1rem;
  background-color: blue;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: lightblue;
  margin-bottom: 30px;
  text-align: center;
`
const Cards = props => {
    const player = props.person;
    return (
        <Main data-testid='all-cards'>
            <h1>Name: {player.name}</h1>
            <h2> Country: {player.country}</h2>
            <h2>Has had: {player.searches} searches</h2>
        </Main>

    )    
    
}

export default Cards;