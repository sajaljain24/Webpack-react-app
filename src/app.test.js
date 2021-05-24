import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'

test('sample test 1', () => {
    expect(render(<App />)).toBeDefined();
});
test('sample test 2', () => {
    render(<App />);
    screen.getByText("Welcome to React App");
});
