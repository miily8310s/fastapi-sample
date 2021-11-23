import { Table } from "components/Elements/Table";
import { useArticles } from "../api/getArticles";
import { Article } from "features/articles/";

export const ArticleList = () => {
  const { isLoading, data } = useArticles();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>Not Data</p>;
  }
  // TODO: 詳細リンクと編集、削除ボタンの追加
  return (
    <Table<Article>
      data={data}
      columns={[
        { title: "id", field: "id" },
        { title: "タイトル", field: "title" },
        { title: "内容", field: "body" },
      ]}
    />
  );
};
