import axios from "axios";
import { useQuery } from "react-query";

const token = JSON.parse(localStorage.getItem("token"));

const useGetCurrentUser = (id) => {
  return useQuery(["student"], async () => {
    const config = {
      headers: {
        auth: token,
      },
      withCredentials: false,
    };

    return axios
      .get(`http://localhost:9000/api/user/${id}`, config)
      .then((res) => {
        if (res.status === 200) {
          return res?.data;
        }
      })
      .catch((err) => {
        return err.response;
      });
  });
};

export default useGetCurrentUser;
