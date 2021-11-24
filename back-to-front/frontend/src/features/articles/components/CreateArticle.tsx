import { Button } from "components/Elements/Button";
import { useState, ChangeEvent } from "react";
import { useCreateArticle } from "../api/createArticle";

export const CreateArticle = () => {
  const createArticleMutation = useCreateArticle();
  const [textTitle, setTextTitle] = useState("");
  const [textBody, setTextBody] = useState("");
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
        await createArticleMutation.mutateAsync({
          title: textTitle,
          body: textBody,
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
      <Button type="submit">作成する</Button>
    </form>
  );
};
