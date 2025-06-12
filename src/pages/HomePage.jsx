import NavBar from "../components/NavBar";

const HomePage = () => {
    return (
        <>
            <div className="container mt-5 text-center">
                <h1 className="text-4xl text-gray-800">Welcome to recipe APP!</h1>
                <h4 className="text-xl text-gray-600">A simple recipe application</h4>

                <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md p-5 rounded-lg overflow-hidden border border-gray-200 px-5 py-5">
                    <ul className="text-center mt-1 text-lg text-gray-600">
                        <li>Share your recipe with your friends</li>
                        <li>post likes</li>
                        <li>view comments</li>
                        <li>And much more!</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomePage;