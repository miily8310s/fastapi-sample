import { Helmet } from "react-helmet-async";

interface HeaderProps {
  title?: string;
  description?: string;
}

export const Header = ({
  title = "Home",
  description = "home of sample application",
}: HeaderProps) => {
  return (
    <Helmet title={`${title} | サンプルアプリ`}>
      <meta name="description" content={description} />
    </Helmet>
  );
};
