import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Top() {
  return (
    <div className="app-container">
      <Footer />
      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}

export default Top;
