import { Table } from "components/Elements/Table";
import { useArticles } from "../api/getArticles";
import { Article } from "features/articles/";
import { Link } from "react-router-dom";
import { Button } from "components/Elements/Button";
import { useDeleteArticle } from "../api/deleteArticle";

export const ArticleList = () => {
  const { isLoading, data } = useArticles();
  const deleteArticleMutation = useDeleteArticle();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>Not Data</p>;
  }
  return (
    <Table<Article>
      data={data}
      columns={[
        { title: "id", field: "id" },
        { title: "タイトル", field: "title" },
        {
          title: "",
          field: "id",
          Cell({ entry: { id } }) {
            return <Link to={`./${id}`}>詳細</Link>;
          },
        },
        {
          title: "",
          field: "id",
          Cell({ entry: { id } }) {
            return (
              <Button
                type="button"
                onClick={async () =>
                  await deleteArticleMutation.mutateAsync({ articleId: id })
                }
              >
                削除ボタン
              </Button>
            );
          },
        },
      ]}
    />
  );
};
