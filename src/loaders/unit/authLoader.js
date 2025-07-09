import { redirect } from "react-router-dom";
import authServices from "../../services/authServices";

const authLoader = async () => {
    try {
        const response = await authServices.me();
        return response.data;
    } catch (error) {
        return redirect('/login');
    }
}

export default authLoader;