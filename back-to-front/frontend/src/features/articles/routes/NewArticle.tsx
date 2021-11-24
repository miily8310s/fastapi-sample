import { ContentLayout } from "components/Layout";
import { CreateArticle } from "../components/CreateArticle";

export const NewArticle = () => {
  return (
    <ContentLayout title={"新規記事の作成"}>
      <CreateArticle />
    </ContentLayout>
  );
};
