import { useState, ChangeEvent } from "react";

interface UpdateArticleProps {
  title: string;
  body: string;
}

export const UpdateArticle = ({ title, body }: UpdateArticleProps) => {
  const [textTitle, setTextTitle] = useState(title);
  const [textBody, setTextBody] = useState(body);
  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextTitle(e.target.value);
  };
  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextBody(e.target.value);
  };
  return (
    <div>
      <textarea value={textTitle} onChange={handleTitleChange} />
      <textarea value={textBody} onChange={handleBodyChange} />
    </div>
  );
};
