import React from "react"
import IngredientsList from "../components/IngredientsList";
import Recipe from "../components/Recipe";
import { getRecipeFromChefClaude } from "../utils/ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        const recipeMD = await getRecipeFromChefClaude(ingredients);
        setRecipe(recipeMD);
    }

    function addIngredients(formData) {
        const newIngredient = formData.get("Ingredient");
        setIngredients((prevIngredientsList) => [...prevIngredientsList, newIngredient]);
    }

    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <form 
                action={addIngredients} 
                className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white shadow-md rounded-lg p-4 md:p-6 max-w-2xl mx-auto mb-6"
            >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="Ingredient"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                >
                    Add Ingredient
                </button>
            </form>

            {ingredients.length > 0 ? (
                <IngredientsList 
                    ingredients={ingredients} 
                    getRecipe={getRecipe} 
                />
            ) : null}

            {recipe ? <Recipe recipe={recipe} /> : null}
        </main>
    );
}

