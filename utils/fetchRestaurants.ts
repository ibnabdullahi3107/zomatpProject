import spoonacularApi from "./axiosInstance";

export const fetchRestaurants = async () => {
  try {
    const response = await spoonacularApi.get("/food/menuItems/search", {
      params: {
        query: "restaurant",
        number: 20, // Number of items to fetch
      },
    });
    return response.data; // Return only the data
  } catch (error) {
    console.error("Error fetching restaurants:", error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch restaurants. Please try again later.");
  }
};
