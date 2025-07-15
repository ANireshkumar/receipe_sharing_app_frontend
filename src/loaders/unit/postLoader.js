import postServices from "../../services/postServices";

export const postLoader = async ({ params }) => {
    const { postId } = params;
    const response = await postServices.fetchPost(postId);
    return { post: response.data.post };
};