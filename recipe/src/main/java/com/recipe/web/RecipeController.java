package com.recipe.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import com.recipe.domain.Recipe;
import com.recipe.domain.RecipeRepository;

public class RecipeController {
	
	@Autowired
	private RecipeRepository rRepository;
	
	
	@GetMapping("/recipes")
	public Iterable<Recipe> getRecipes(){
		return rRepository.findAll();
	}
}
