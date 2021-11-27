import { ContentLayout } from "components/Layout";
import { ArticleList } from "../components/ArticleList";
import { Link } from "react-router-dom";

export const Articles = () => {
  return (
    <ContentLayout title="記事一覧">
      <Link to="./new">新規記事を作成</Link>
      <div>
        <ArticleList />
      </div>
    </ContentLayout>
  );
};
