import fetchClient from "./axiosInstance";

const loginService = async (requestBody) => {
  try {
    const response = await fetchClient.post(
      `https://reqres.in/api/login`,
      JSON.stringify(requestBody),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export { loginService };
