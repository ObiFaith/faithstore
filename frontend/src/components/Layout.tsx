import { Outlet } from "react-router-dom";
import { Footer, UserHeader, GuestHeader, Newsletter } from "..";

const Layout = () => {
  const isUser = localStorage.getItem("isUser");
  return (
    <>
      {isUser ? <UserHeader /> : <GuestHeader />}
      <div className=" bg-[#F6F7F9]">
        <Outlet />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
