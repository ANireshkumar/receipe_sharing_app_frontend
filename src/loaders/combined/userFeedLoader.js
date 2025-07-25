import { redirect } from "react-router-dom";
import authServices from "../../services/authServices";
import postServices from "../../services/postServices";

const userFeedLoader = async () => {
    try {
        const response = await Promise.all([
            authServices.me(),
            postServices.fetchPosts()
        ]);
        return { user: response[0].data, posts: response[1].data };
    } catch (error) {
        return redirect('/login');
    }
}

export default userFeedLoader;