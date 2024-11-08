import axios from "axios";

const spoonacularApi = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: "3ff392891ff74914a13a7fdb54a17c9b",
  },

});

export default spoonacularApi;
