import { client } from "lib/axios";
import { useMutation, QueryClient } from "react-query";
import { Article } from "../types";

interface CreateArticle {
  title: string;
  body: string;
}

const createArticle = async (data: CreateArticle) => {
  return await client.post(`/post-article`, data);
};

const queryClient = new QueryClient();

export const useCreateArticle = () => {
  return useMutation({
    onMutate: async (newArticle) => {
      await queryClient.cancelQueries("articles");
      const previousArticles = queryClient.getQueryData<Article[]>("articles");
      queryClient.setQueryData("articles", [
        ...(previousArticles || []),
        newArticle,
      ]);
      return { previousArticles };
    },
    onSuccess: () => {
      queryClient.invalidateQueries("articles");
    },
    mutationFn: createArticle,
  });
};
