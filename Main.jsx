import {useState} from "react";

export default function Main() {

    const [ingredient , setIngredient] = useState([])

    const ingredientList =
        ingredient.map(element => (
            <li key={element}>{element}</li>
        ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredient(prevState => [...prevState, newIngredient])
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
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </main>
    )
}