import { ArticleList } from "features/articles/components/ArticleList";
import { Sample } from "features/sample/components/Sample";
import { Navigate, Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const AppSample = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppSample />,
    children: [
      { path: "/", element: <Sample /> },
      {
        path: "/articles",
        element: <ArticleList />,
      },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
