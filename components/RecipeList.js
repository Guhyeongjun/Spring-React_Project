import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, CircularProgress } from '@mui/material';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);  // 로딩 상태 추가

  useEffect(() => {
    axios.get('http://localhost:8080/api/recipes')
      .then(response => {
        console.log('API 응답:', response.data);  // 응답 데이터 확인
        if (Array.isArray(response.data)) {
          setRecipes(response.data);
        } else {
          setRecipes([]);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the recipes!', error);
        setRecipes([]);
      })
      .finally(() => {
        setLoading(false);  // 로딩 완료
      });
  }, []);

  if (loading) {
    return <CircularProgress />;  // 로딩 중일 때 로딩 표시
  }

  return (
    <List>
      {recipes.map(recipe => (
        <ListItem key={recipe.name}>
          <ListItemText
            primary={recipe.name}
            secondary={`Category: ${recipe.category || 'N/A'}, Cost: ${recipe.cost !== undefined ? recipe.cost : 'N/A'}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default RecipeList;
