import axios from "axios";
class AuthService {
  API_BASE:string | undefined = process.env.REACT_APP_API_BASE;

    login(email: string, password: string) {
      console.log()
      return axios
        .post(`${this.API_BASE}/login`, {
          email,
          password
        })
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
  
          return response.data;
        });
    }
  
    logout() {
      localStorage.removeItem("user");
    }
  
    register(name: string, email: string, password: string) {
      return axios.post(`${this.API_BASE}/users`, {
        name,
        email,
        password
      });
    }
  
    getCurrentUser() {
      const userStr = localStorage.getItem("user");
      if (userStr) return JSON.parse(userStr);
  
      return null;
    }
  }
  
  export default new AuthService();