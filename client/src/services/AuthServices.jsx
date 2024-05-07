import axios from "axios";



const apiLogin = "http://localhost:3001/auth/login";
const apiRegister = "http://localhost:3001/auth/register";

export const login = async({Email, Password}) => {
    try {
        const res = await axios.post(apiLogin, {Email, Password});
        const token = res.data.token;
        
        if (token) {
            // Example: Store token in local storage
            localStorage.setItem("token", token);
        }

    } catch (error) {
        console.error("Login failed:", error);
        
    }
};

export const register = async ({FirstName, LastName, UserName, Email, Password}) => {
    try {
        const res = await axios.post(apiRegister, {FirstName, LastName, UserName, Email, Password})
        const token = res.data.token;

        // Handle token (e.g., store it securely)
        if (token) {
            // Example: Store token in local storage
            localStorage.setItem("token", token);
        }

    } catch (error) {
        console.log("Register failed:", error);
    }
}

