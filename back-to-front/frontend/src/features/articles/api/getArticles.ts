import { client } from "lib/axios";
import { useQuery } from "react-query";
import { Article } from "../types";

const getArticles = async () => {
  const { data } = await client.get<Article[]>("/get-all-articles");
  return data;
};

export const useArticles = () => {
  return useQuery("articles", getArticles);
};
