import React from "react"
import IngredientsList from "./Ingredients.jsx"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import { getRecipeFromMistral} from "../ai.jsx"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["chicken", "all the main spices", "corn", "heavy cream"]
    )
    const [recipe, setRecipe] = React.useState("")

    const showRecipe = React.useRef(null)

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    React.useEffect(()=>{
        if (recipe&&showRecipe.current){
            showRecipe.current.scrollIntoView({ behavior: "smooth" });
        }
    },[recipe])

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ref={showRecipe}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}