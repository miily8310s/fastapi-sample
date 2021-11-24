import { client } from "lib/axios";
import { useMutation, QueryClient } from "react-query";
import { Article } from "../types";

const deleteArticle = async ({ articleId }: { articleId: string }) => {
  return await client.delete(`/delete-article/${articleId}`);
};

const queryClient = new QueryClient();

export const useDeleteArticle = () => {
  return useMutation({
    onMutate: async (deletedArticle) => {
      await queryClient.cancelQueries("articles");
      const previousArticles = queryClient.getQueryData<Article[]>("articles");
      queryClient.setQueryData(
        "articles",
        previousArticles?.filter(
          (article) => article.id !== deletedArticle.articleId
        )
      );
      return { previousArticles };
    },
    onSuccess: () => {
      queryClient.invalidateQueries("articles");
    },
    mutationFn: deleteArticle,
  });
};
