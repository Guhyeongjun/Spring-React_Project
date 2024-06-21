package com.recipe.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
	List<Recipe> findByCategory(String category);
    List<Recipe> findByNameContaining(String name);
}
