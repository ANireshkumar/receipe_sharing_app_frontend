import instance from "./instance";

const postServices = {
    createPost: async (post) => {
        return await instance.post("/posts", post, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true
        });
    },
    fetchPosts: async () => {
        return await instance.get("/posts");
    },
    fetchPost: async (postId) => {
        return await instance.get(`/posts/${postId}`);
    },
    updatePost: async (postId, post) => {
        return await instance.put(`/posts/${postId}`, post, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    deletePost: async (postId) => {
        return await instance.delete(`/posts/${postId}`);
    },
    likePost: async (postId) => {
        return await instance.post(`/posts/${postId}/like`);
    }
}

export default postServices;