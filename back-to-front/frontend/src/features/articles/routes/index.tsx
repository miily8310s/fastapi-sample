import { Route, Routes } from "react-router-dom";
import { Articles } from "./Articles";
import { Article } from "./Article";

export const ArticlesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Articles />}></Route>
      <Route path=":articleId" element={<Article />} />
    </Routes>
  );
};
