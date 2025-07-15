const HomePage = () => {
    return (
        <>
            <div className="container mt-10 text-center">
                <div className="bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200 p-10 rounded-xl shadow-xl">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in">🍽️ Welcome to Recipe APP!</h1>
                    <h4 className="text-2xl text-gray-700 font-medium animate-fade-in-slow">
                        Your go-to place for delicious ideas 💡
                    </h4>
                </div>

                <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl overflow-hidden border border-gray-300">
                    <ul className="text-center text-lg text-gray-700 space-y-3">
                        <li className="hover:text-orange-500 transition">👩‍🍳 Share your recipe with your friends</li>
                        <li className="hover:text-red-500 transition">❤️ Post likes on dishes you love</li>
                        <li className="hover:text-green-500 transition">💬 View and add comments</li>
                        <li className="hover:text-indigo-500 transition">🎉 Discover new culinary adventures</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HomePage;