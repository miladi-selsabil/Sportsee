import Header from "../Components/Header";
// import Footer from "../components/Footer";
import { Outlet } from "react-router";
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;
