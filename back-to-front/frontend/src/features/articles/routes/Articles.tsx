import { ContentLayout } from "components/Layout";
import { ArticleList } from "../components/ArticleList";

export const Articles = () => {
  return (
    <ContentLayout title="記事一覧">
      <div>作成ボタン</div>
      <div>
        <ArticleList />
      </div>
    </ContentLayout>
  );
};
