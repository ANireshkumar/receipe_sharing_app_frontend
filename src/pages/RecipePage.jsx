import { useParams } from "react-router-dom";

const recipes = {
    "classic-spaghetti-bolognese": {
        title: "Classic Spaghetti Bolognese",
        description: "A rich and savory meat sauce served over a bed of spaghetti.",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "500g ground beef",
            "1 (400g) can crushed tomatoes",
            "1 (150g) can tomato paste",
            "1 tsp dried oregano",
            "Salt and pepper to taste",
            "400g spaghetti",
            "Grated Parmesan cheese, for serving",
        ],
        instructions: [
            "Heat olive oil in a large pot or Dutch oven over medium heat. Add onion and cook until softened, about 5 minutes. Add garlic and cook for another minute until fragrant.",
            "Add ground beef and cook until browned, breaking it up with a spoon. Drain off any excess fat.",
            "Stir in crushed tomatoes, tomato paste, and oregano. Season with salt and pepper. Bring to a simmer, then reduce heat and let it cook for at least 30 minutes, or until the sauce has thickened.",
            "Meanwhile, cook spaghetti according to package directions. Drain and set aside.",
            "Serve the Bolognese sauce over the spaghetti, topped with grated Parmesan cheese.",
        ],
    },
    "chicken-alfredo-pasta": {
        title: "Chicken Alfredo Pasta",
        description: "Creamy, cheesy, and oh-so-satisfying, this chicken alfredo is a guaranteed crowd-pleaser.",
        ingredients: [
            "8 oz fettuccine",
            "2 boneless, skinless chicken breasts, cut into bite-sized pieces",
            "2 tbsp butter",
            "2 cloves garlic, minced",
            "1 cup heavy cream",
            "1 cup grated Parmesan cheese",
            "Salt and pepper to taste",
            "Fresh parsley, chopped (for garnish)",
        ],
        instructions: [
            "Cook fettuccine according to package directions. Drain and set aside.",
            "While the pasta is cooking, season the chicken with salt and pepper.",
            "In a large skillet, melt the butter over medium-high heat. Add the chicken and cook until golden brown and cooked through. Remove the chicken from the skillet and set aside.",
            "In the same skillet, add the garlic and cook until fragrant, about 30 seconds. Stir in the heavy cream and bring to a simmer. Reduce the heat to low and whisk in the Parmesan cheese until melted and the sauce is smooth.",
            "Return the chicken to the skillet and add the cooked fettuccine. Toss to combine and heat through.",
            "Garnish with fresh parsley and serve immediately.",
        ],
    },
    "vegetarian-chili": {
        title: "Vegetarian Chili",
        description: "A hearty and flavorful chili made with beans, vegetables, and a blend of spices.",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 bell peppers (any color), chopped",
            "2 carrots, chopped",
            "2 celery stalks, chopped",
            "3 cloves garlic, minced",
            "1 (400g) can diced tomatoes",
            "1 (400g) can kidney beans, rinsed and drained",
            "1 (400g) can black beans, rinsed and drained",
            "1 tbsp chili powder",
            "1 tsp cumin",
            "1/2 tsp smoked paprika",
            "Salt and pepper to taste",
            "Optional toppings: sour cream, shredded cheese, chopped cilantro, sliced avocado",
        ],
        instructions: [
            "Heat olive oil in a large pot or Dutch oven over medium heat. Add onion, bell peppers, carrots, and celery. Cook until softened, about 10 minutes.",
            "Add garlic and cook for another minute until fragrant.",
            "Stir in diced tomatoes, kidney beans, black beans, chili powder, cumin, and smoked paprika. Season with salt and pepper.",
            "Bring to a simmer, then reduce heat and let it cook for at least 30 minutes, or until the flavors have melded and the chili has thickened.",
            "Serve hot with your favorite toppings.",
        ],
    },
    "lemon-herb-baked-salmon": {
        title: "Lemon Herb Baked Salmon",
        description: "A simple yet elegant dish of salmon baked with lemon and herbs.",
        ingredients: [
            "4 (6-ounce) salmon fillets",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1 tsp dried thyme",
            "1 tsp dried rosemary",
            "Salt and pepper to taste",
            "1 lemon, thinly sliced",
            "Fresh parsley, chopped (for garnish)",
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Place the salmon fillets on a baking sheet lined with parchment paper.",
            "In a small bowl, whisk together the olive oil, garlic, thyme, and rosemary. Season with salt and pepper.",
            "Brush the olive oil mixture over the salmon fillets.",
            "Top each fillet with a few slices of lemon.",
            "Bake for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork.",
            "Garnish with fresh parsley and serve immediately.",
        ],
    },
    "quinoa-salad-with-roasted-vegetables": {
        title: "Quinoa Salad with Roasted Vegetables",
        description: "A healthy and delicious salad made with quinoa, roasted vegetables, and a lemon vinaigrette.",
        ingredients: [
            "1 cup quinoa, rinsed",
            "2 cups water or vegetable broth",
            "1 sweet potato, peeled and diced",
            "1 red bell pepper, chopped",
            "1 zucchini, chopped",
            "1 red onion, chopped",
            "2 tbsp olive oil",
            "Salt and pepper to taste",
            "For the vinaigrette:",
            "1/4 cup olive oil",
            "2 tbsp lemon juice",
            "1 tsp Dijon mustard",
            "1/2 tsp honey or maple syrup",
            "Salt and pepper to taste",
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "In a medium saucepan, combine the quinoa and water or vegetable broth. Bring to a boil, then reduce heat and simmer for 15-20 minutes, or until the liquid is absorbed and the quinoa is cooked through. Fluff with a fork and set aside.",
            "While the quinoa is cooking, toss the sweet potato, bell pepper, zucchini, and red onion with olive oil, salt, and pepper on a baking sheet. Roast for 20-25 minutes, or until the vegetables are tender and lightly browned.",
            "In a small bowl, whisk together the ingredients for the vinaigrette.",
            "In a large bowl, combine the cooked quinoa, roasted vegetables, and vinaigrette. Toss to combine.",
            "Serve warm or at room temperature.",
        ],
    },
    "chocolate-avocado-mousse": {
        title: "Chocolate Avocado Mousse",
        description: "A rich and creamy chocolate mousse made with a secret healthy ingredient: avocado!",
        ingredients: [
            "2 ripe avocados, pitted and peeled",
            "1/2 cup unsweetened cocoa powder",
            "1/2 cup maple syrup or honey",
            "1/4 cup milk (dairy or non-dairy)",
            "1 tsp vanilla extract",
            "A pinch of salt",
        ],
        instructions: [
            "Combine all ingredients in a blender or food processor. Blend until smooth and creamy, scraping down the sides as needed.",
            "Taste and adjust sweetness if necessary.",
            "Divide the mousse among serving dishes and chill for at least 30 minutes before serving.",
        ],
    },
};

const RecipePage = () => {
    const { recipeId } = useParams();
    const recipe = recipes[recipeId];

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <div className="container mt-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
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