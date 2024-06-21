import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position='static' color='success'>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant='h6'>
            레시피 게시판
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <RecipeList />
      </Container>
    </div>
  );
}

export default App;
