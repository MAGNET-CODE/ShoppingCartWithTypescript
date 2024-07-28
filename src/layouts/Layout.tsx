import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="vh-100">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
