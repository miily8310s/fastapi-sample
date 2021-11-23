import { Outlet } from "react-router-dom";
import { useArticles } from "../api/getArticles";

export const ArticleList = () => {
  const { isLoading, data } = useArticles();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>Not Data</p>;
  }
  return (
    <div>
      <Outlet />
      {data.map((article) => (
        <div key={`${article.id}_${article.title}`}>
          <p>{article.id}</p>
          <p>{article.title}</p>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
};
