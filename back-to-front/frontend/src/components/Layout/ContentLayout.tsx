import { Header } from "components/Header";
import { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
  title: string;
}

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Header title={title} />
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
