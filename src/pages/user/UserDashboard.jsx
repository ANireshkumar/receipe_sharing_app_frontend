import { Link } from "react-router-dom";

const recipes = [
    {
        id: "classic-spaghetti-bolognese",
        title: "Classic Spaghetti Bolognese",
        description: "A rich and savory meat sauce served over a bed of spaghetti.",
        image: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "chicken-alfredo-pasta",
        title: "Chicken Alfredo Pasta",
        description: "Creamy, cheesy, and oh-so-satisfying, this chicken alfredo is a guaranteed crowd-pleaser.",
        image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "vegetarian-chili",
        title: "Vegetarian Chili",
        description: "A hearty and flavorful chili made with beans, vegetables, and a blend of spices.",
        image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "lemon-herb-baked-salmon",
        title: "Lemon Herb Baked Salmon",
        description: "A simple yet elegant dish of salmon baked with lemon and herbs.",
        image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "quinoa-salad-with-roasted-vegetables",
        title: "Quinoa Salad with Roasted Vegetables",
        description: "A healthy and delicious salad made with quinoa, roasted vegetables, and a lemon vinaigrette.",
        image: "https://plus.unsplash.com/premium_photo-1664648184009-6d3cf41a2aaf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "chocolate-avocado-mousse",
        title: "Chocolate Avocado Mousse",
        description: "A rich and creamy chocolate mousse made with a secret healthy ingredient: avocado!",
        image: "https://images.unsplash.com/photo-1638612833646-34eecc16f3f1?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const UserDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white shadow">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-2xl font-semibold">🍽️ Recipe Sharing Dashboard</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6">Featured Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {recipes.map((recipe) => (
                        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                                    <p className="text-gray-600">{recipe.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default UserDashboard;