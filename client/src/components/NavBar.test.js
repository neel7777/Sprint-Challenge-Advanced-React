import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import { render, getByText } from '@testing-library/react';

test('render navbar title', () =>{
    const { getByText } = render (<NavBar />)
    getByText(/Women's World Cup/i)
})