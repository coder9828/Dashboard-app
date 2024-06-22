// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Button
            variant="contained"
            color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                backgroundColor: theme.palette.mode === 'light' ? '#1976d2' : '#9c27b0',
                color: '#fff',
            }}
        >
            {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
    );
};

export default ThemeToggle;