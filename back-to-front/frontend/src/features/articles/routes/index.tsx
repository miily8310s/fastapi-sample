import { Navigate, Route, Routes } from "react-router-dom";
import { ArticleList } from "../components/ArticleList";

export const ArticlesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ArticleList />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
