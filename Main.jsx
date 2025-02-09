import React, { useState } from "react";
import IngredientsList from "./Components/Ingredients.jsx";
import ClaudeRecipe from "./Components/ClaudeRecipe.jsx";
import { getRecipeFromMistral } from "./ai.jsx";
import UpcomingFeat from "./Components/UpcomingFeat.jsx";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [showFeatures, setShowFeatures] = useState(false); // State to control feature display

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}

            {recipe && (
                <button className="custom-button" onClick={() => setShowFeatures(true)}>
                    Upcoming Features
                </button>
            )}

            {showFeatures && <UpcomingFeat />}
        </main>
    );
}
