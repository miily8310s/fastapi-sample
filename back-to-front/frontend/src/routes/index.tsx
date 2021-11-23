// import { Sample } from "features/sample/components/Sample";
import { useRoutes } from "react-router";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  // TODO: ユーザー認証が入ったときのために共通ルートを設置
  // const commonRoutes = [{ path: "/", element: <Sample /> }];
  const routes = publicRoutes;
  // const element = useRoutes([...routes, ...commonRoutes]);
  const element = useRoutes(routes);
  return <>{element}</>;
};
