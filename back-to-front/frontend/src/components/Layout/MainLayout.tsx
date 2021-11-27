import { Link } from "components/Elements/Link";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import logo from "logo.svg";

const Logo = ({ className }: { className: string }) => {
  return (
    <Link to="." className={className}>
      <img src={logo} alt="ReactLogo" />
      <p>サンプルページ</p>
    </Link>
  );
};

const SideNavigation = ({ className }: { className: string }) => {
  const navigation = [
    { name: "ホーム", to: "." },
    { name: "記事", to: "./articles" },
  ];
  return (
    <>
      {navigation.map((item, index) => (
        <NavLink key={item.name} end={index === 0} to={item.to}>
          <div className={className}>{item.name}</div>
        </NavLink>
      ))}
    </>
  );
};

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Logo className="Sidebar_logo" />
      <nav className="Sidebar_nav">
        <SideNavigation className="Sidebar_navLink" />
      </nav>
    </div>
  );
};

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="MainLayout">
      <Sidebar />
      <div className="MainLayout_children">{children}</div>
    </div>
  );
};
