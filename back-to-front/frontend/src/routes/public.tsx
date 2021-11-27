import { Sample } from "features/sample/components/Sample";
import { Navigate, Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { ArticlesRoutes } from "features/articles/routes";
import { MainLayout } from "components/Layout";

const AppSample = () => {
  return (
    <MainLayout>
      <div className="Header" />
      <Outlet />
    </MainLayout>
  );
};

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppSample />,
    children: [
      { path: "/", element: <Sample /> },
      {
        path: "/articles/*",
        element: <ArticlesRoutes />,
      },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
