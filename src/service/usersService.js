import fetchClient from "./axiosInstance";

const getUsers = async () => {
  try {
    const response = await fetchClient.get(`https://reqres.in/api/users`, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

const createUserService = async (user) => {
  try {
    const response = await fetchClient.post(
      `https://reqres.in/api/users`,
      JSON.stringify(user),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};
const updateUserService = async (user) => {
  try {
    const response = await fetchClient.put(
      `https://reqres.in/api/users/${user.ID}`,
      JSON.stringify(user),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

const deleteUserService = async (id) => {
  try {
    const response = await fetchClient.delete(
      `https://reqres.in/api/users/${id}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};
export { getUsers, createUserService, updateUserService, deleteUserService };
