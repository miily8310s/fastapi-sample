import { ContentLayout } from "components/Layout";
import { UpdateArticle } from "../components/UpdateArticle";
import { useParams } from "react-router-dom";
import { useArticle } from "../api/getArticle";

export const Article = () => {
  const { articleId } = useParams<"articleId">();
  if (!articleId) {
    return <div>不正なデータです</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const articleQuery = useArticle({ articleId });

  if (articleQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ContentLayout
      title={`${articleQuery.data!.id}: ${articleQuery.data!.title}`}
    >
      <div>
        <UpdateArticle
          title={articleQuery.data!.title}
          body={articleQuery.data!.body}
        />
      </div>
    </ContentLayout>
  );
};
