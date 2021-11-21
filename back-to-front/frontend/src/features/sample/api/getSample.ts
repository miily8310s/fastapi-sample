import { axios } from "lib/axios";
import { useQuery } from "react-query";
import { Sample } from "../types";

const getSample = async () => {
  const { data } = await axios.get<Sample>("/");
  return data;
};

export const useSample = () => {
  return useQuery("sample", getSample);
};
