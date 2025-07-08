import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContent, selectTitle, setContent, setTitle } from "../../redux/features/post/createPostSlice";
import { useNavigate } from "react-router";
import postServices from "../../services/postServices";
import { toast } from "react-toastify";

const CreatePost = () => {
    const title = useSelector(selectTitle);
    const content = useSelector(selectContent); 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleCreatePost = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        if (image) {
            formData.append("image", image); // Must match Multer field name
        }

        postServices.createPost(formData)
            .then((response) => {
                toast.success(response.data.message);
                dispatch(setTitle(""));
                dispatch(setContent(""));
                setImage(null);
                setImagePreview(null);

                setTimeout(() => {
                    navigate("/dashboard/feed");
                }, 500);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">New Post</h2>
                <form onSubmit={handleCreatePost} encType="multipart/form-data">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:ring-2 focus:ring-blue-500"
                            value={title}
                            onChange={(e) => dispatch(setTitle(e.target.value))}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows="3"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:ring-2 focus:ring-blue-500"
                            value={content}
                            onChange={(e) => dispatch(setContent(e.target.value))}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 block w-full text-sm text-gray-700"
                        />
                    </div>
                    {imagePreview && (
                        <div className="mb-4">
                            <img src={imagePreview} alt="Image Preview" className="w-full h-auto rounded-md" />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;