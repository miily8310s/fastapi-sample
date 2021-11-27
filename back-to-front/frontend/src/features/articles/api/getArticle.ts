import { client } from "lib/axios";
import { useQuery } from "react-query";
import { Article } from "../types";

const getArticle = async ({ articleId }: { articleId: string }) => {
  const { data } = await client.get<Article>(`/get-article/${articleId}`);
  return data;
};

interface useArticleProps {
  articleId: string;
}

export const useArticle = ({ articleId }: useArticleProps) => {
  return useQuery({
    queryKey: ["article", articleId],
    queryFn: () => getArticle({ articleId }),
  });
};
