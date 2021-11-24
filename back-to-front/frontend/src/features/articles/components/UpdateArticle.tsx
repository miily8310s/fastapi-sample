import { Button } from "components/Elements/Button";
import { useState, ChangeEvent } from "react";
import { useArticle } from "../api/getArticle";
import { useUpdateArticle } from "../api/updateArticle";
interface UpdateArticleProps {
  articleId: string;
}

const UpdateArticleForm = ({
  articleId,
  articleQuery,
}: {
  articleId: string;
  articleQuery: any;
}) => {
  const updateArticleMutation = useUpdateArticle();
  const [textTitle, setTextTitle] = useState(articleQuery.data!.title);
  const [textBody, setTextBody] = useState(articleQuery.data!.body);
  const [textError, setTextError] = useState("");
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextTitle(e.target.value);
  };
  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextBody(e.target.value);
  };
  return (
    <form
      onSubmit={async () => {
        if (textTitle === "" || textBody === "") {
          setTextError("文字を入力してください");
          return;
        }
        await updateArticleMutation.mutateAsync({
          req: { title: textTitle, body: textBody },
          articleId,
        });
      }}
    >
      <div>
        <p>タイトル</p>
        <input type="text" value={textTitle} onChange={handleTitleChange} />
      </div>
      <div>
        <p>内容</p>
        <textarea value={textBody} onChange={handleBodyChange} />
      </div>
      <p>{textError}</p>
      <Button type="submit">修正する</Button>
    </form>
  );
};

export const UpdateArticle = ({ articleId }: UpdateArticleProps) => {
  const articleQuery = useArticle({ articleId });
  if (articleQuery.isLoading) {
    return <div>不正なデータです</div>;
  }
  return (
    <UpdateArticleForm articleId={articleId} articleQuery={articleQuery} />
  );
};
