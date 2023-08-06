import axios from "axios";

export const register = async (payload: {
  email: string;
  password: string;
}) => {
  const res = await axios.post("/api/register", payload);

  return res.data;
};
