import { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
  title: string;
}

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      {/* <header></header> */}
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};
