import { Navigate, Route, Routes } from "react-router-dom";
import { Articles } from "./Articles";

export const ArticlesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Articles />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
