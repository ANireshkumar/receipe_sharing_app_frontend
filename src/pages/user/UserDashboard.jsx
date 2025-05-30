import React, { useState, useEffect } from "react";

const sampleRecipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    image: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Mango Smoothie",
    description: "A refreshing smoothie made with fresh mangoes, yogurt, and honey.",
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Chocolate Cake",
    description: "A rich and moist chocolate cake topped with creamy ganache.",
    image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Avocado Toast",
    description: "Toasted bread topped with mashed avocado, olive oil, and chili flakes.",
    image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Sushi Platter",
    description: "An assortment of fresh sushi rolls with wasabi and soy sauce.",
    image: "https://plus.unsplash.com/premium_photo-1664648184009-6d3cf41a2aaf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Greek Salad",
    description: "A healthy salad with cucumbers, tomatoes, olives, and feta cheese.",
    image: "https://images.unsplash.com/photo-1638612833646-34eecc16f3f1?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(sampleRecipes);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <header className="bg-blue-600 text-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-semibold">🍽️ Recipe Sharing Dashboard</h1>
        </div>
      </header>

      {/* Recipe Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
                <p className="text-gray-600">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
