import React from 'react';
import './App.css';

const recipes = [
  {
    id: 'carrot-pea-pasta',
    title: "Carrot Pea Pasta",
    servings: "For 3 people",
    ingredients: [
      "5 carrots",
      "1 can of peas",
      "Olive oil",
      "300g pasta",
      "1 onion"
    ],
    instructions: `Chop the onion and sauté it in olive oil until translucent. Add finely chopped carrots and peas to the pan and cook until tender. Transfer the vegetables to a blender and blend into a creamy sauce. Add water if needed. Cook the pasta and drain the water. Mix the sauce with the pasta. Season with salt and pepper to taste.`
  },
  {
    id: 'carrot-pea-pasta-2',
    title: "Carrot Pea Pasta",
    servings: "For 3 people",
    ingredients: [
      "5 carrots",
      "1 can of peas",
      "Olive oil",
      "300g pasta",
      "1 onion"
    ],
    instructions: `Chop the onion and sauté it in olive oil until translucent. Add finely chopped carrots and peas to the pan and cook until tender. Transfer the vegetables to a blender and blend into a creamy sauce. Add water if needed. Cook the pasta and drain the water. Mix the sauce with the pasta. Season with salt and pepper to taste.`
  }
];

const App = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-list">
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <a href={`#${recipe.id}`} className="nav-link">{recipe.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="contentHome">
        <h1 className="titleHome">B's Cookbook</h1>
        <p className="descriptionHome">Recipies made by B. Quick and easy homemade food</p>

        {recipes.map(recipe => (
          <div key={recipe.id} id={recipe.id} className="recipe">
            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-servings">{recipe.servings}</p>
            <div className="recipe-ingredients">
              <h3>What you need:</h3>
              <ul>
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-instructions">
              <h3>Instructions:</h3>
              <p>{recipe.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
