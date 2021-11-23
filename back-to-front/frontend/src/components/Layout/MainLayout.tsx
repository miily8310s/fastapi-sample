import { Link } from "components/Elements/Link";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import logo from "logo.svg";

const Logo = () => {
  return (
    <Link to=".">
      <img style={{ height: "2rem" }} src={logo} alt="ReactLogo" />
      <span>サンプルページ</span>
    </Link>
  );
};

const SideNavigation = () => {
  const navigation = [
    { name: "ホーム", to: "." },
    { name: "記事", to: "./articles" },
  ];
  return (
    <>
      {navigation.map((item, index) => (
        <NavLink key={item.name} end={index === 0} to={item.to}>
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

const Sidebar = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <nav>
          <SideNavigation />
        </nav>
      </div>
    </div>
  );
};

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
