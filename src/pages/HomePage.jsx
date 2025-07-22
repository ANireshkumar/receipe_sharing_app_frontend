import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";

const HomePage = () => {
    const token = localStorage.getItem("token");

    return (
        <>
            <div className="container mt-10 text-center">
                <div className="bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200 p-10 rounded-xl shadow-xl">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in">🍽️ Welcome to Recipe APP!</h1>
                    <h4 className="text-2xl text-gray-700 font-medium animate-fade-in-slow">
                        Your go-to place for delicious ideas 💡
                    </h4>
                </div>

                {token && (
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold mb-6">Our Recipes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Object.keys(recipes).map((recipeId) => {
                                const recipe = recipes[recipeId];
                                return (
                                    <Link to={`/recipe/${recipeId}`} key={recipeId} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <h3 className="text-2xl font-bold mb-2">{recipe.title}</h3>
                                        <p className="text-gray-600">{recipe.description}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default HomePage;