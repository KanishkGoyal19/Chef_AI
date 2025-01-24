export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map((ingredient, index) => (
        <li key={index} className="text-lg font-medium text-gray-700">
            {ingredient}
        </li>
    ));

    return (
        <section className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Ingredients on Hand:</h2>
            <ul className="list-disc pl-5 space-y-2">{ingredientsListItems}</ul>
            {props.ingredients.length >= 4 ? (
                <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">Ready for a recipe?</h3>
                        <p className="text-gray-600">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button
                        onClick={props.getRecipe}
                        className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                    >
                        Get a Recipe
                    </button>
                </div>
            ) : (
                <p className="text-gray-500 text-lg mt-4">
                    Need <span className="font-bold text-red-500">{4 - props.ingredients.length}</span> more ingredients.
                </p>
            )}
        </section>
    );
}

