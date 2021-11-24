import { Route, Routes } from "react-router-dom";
import { Articles } from "./Articles";
import { Article } from "./Article";
import { NewArticle } from "./NewArticle";

export const ArticlesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Articles />}></Route>
      <Route path=":articleId" element={<Article />} />
      <Route path="/new" element={<NewArticle />} />
    </Routes>
  );
};
