import Header from "../Components/Header";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function Layout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;
