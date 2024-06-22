// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
// import GlobalStyles from './styles/GlobalStyles';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles theme={theme} />
            <Router>
              <Header />
              <Sidebar />
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <ThemeToggle />
              </div>
              <main>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/tables" element={<Tables />} />
                  <Route path="/charts" element={<Charts />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/Kanban" element={<Kanban />} />
                </Routes>
              </main>
            </Router>
          </MuiThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;