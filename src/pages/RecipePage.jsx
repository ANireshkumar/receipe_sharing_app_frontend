import { useParams, useNavigate } from "react-router-dom";
import { recipes } from "../data/recipes";

const RecipePage = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();
    const recipe = recipes[recipeId];

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <div className="container mt-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
                >
                    Back
                </button>
                <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                        <ul className="list-disc list-inside">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-gray-700">{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                        <ol className="list-decimal list-inside">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} className="text-gray-700 mb-2">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipePage;