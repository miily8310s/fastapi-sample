import { client } from "lib/axios";
import { useMutation, QueryClient } from "react-query";
import { Article } from "../types";

interface UpdateArticle {
  req: {
    title: string;
    body: string;
  };
  articleId: string;
}

const updateArticle = async ({
  req,
  articleId,
}: UpdateArticle): Promise<Article> => {
  const { data } = await client.put(`/update-article/${articleId}`, req);
  return data;
};

const queryClient = new QueryClient();

export const useUpdateArticle = () => {
  return useMutation({
    onMutate: async (updatingArticle: any) => {
      await queryClient.cancelQueries(["article", updatingArticle?.articleId]);
      const previousArticle = queryClient.getQueryData<Article>([
        "article",
        updatingArticle?.articleId,
      ]);
      queryClient.setQueryData(["article", updatingArticle?.articleId], {
        ...previousArticle,
        ...updatingArticle.req,
        id: updatingArticle.articleId,
      });
      return { previousArticle };
    },
    onSuccess: (data) => {
      queryClient.refetchQueries(["article", data.id]);
    },
    mutationFn: updateArticle,
  });
};
