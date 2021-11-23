import { Table } from "components/Elements/Table";
import { useArticles } from "../api/getArticles";
import { Article } from "features/articles/";
import { Link } from "react-router-dom";

export const ArticleList = () => {
  const { isLoading, data } = useArticles();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>Not Data</p>;
  }
  // TODO: 編集、削除ボタンの追加
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
      ]}
    />
  );
};
