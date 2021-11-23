import { Sample } from "features/sample/components/Sample";
import { Navigate, Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { ArticlesRoutes } from "features/articles/routes";

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
        element: <ArticlesRoutes />,
      },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
