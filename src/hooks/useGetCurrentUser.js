import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
const useGetCurrentUser = (id) => {
  return useQuery(["student"], async () => {
    return axios
      .get(`http://localhost:9000/api/user/${id}`, { withCredentials: false })
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
