import { useState } from "react";
import Ingredients from "./Ingredients.jsx";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient").trim();

        if (!newIngredient) {
            alert("Please enter a valid ingredient!");
            return;
        }

        if (ingredients.includes(newIngredient)) {
            alert("Ingredient already added!");
            return;
        }

        setIngredients((prevState) => [...prevState, newIngredient]);
        event.target.reset();
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 && <Ingredients
                ingredientsListItems={ingredientsListItems}
                ingredients={ingredients}
            />}
        </main>
    );
}