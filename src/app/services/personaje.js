import instance from "./api";

export const getPersonajes = async (page = 1) => {
  if (page > 42) {
    return [];
  }

  try {
    const response = await instance.get(`character/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
export const getPersonajeById = async (id) => {
  const response = await instance.get(`character/${id}`);
  return response.data;
};
