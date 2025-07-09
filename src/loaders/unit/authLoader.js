import { redirect } from "react-router-dom";
import authServices from "../../services/authServices";
import { store } from "../../redux/app/store";

const authLoader = async () => {
    const isAuthenticated = store.getState().login.isAuthenticated;

    if (!isAuthenticated) {
        return redirect('/login');
    }

    try {
        const response = await authServices.me();
        return response.data;
    } catch (error) {
        return redirect('/login');
    }
}

export default authLoader;