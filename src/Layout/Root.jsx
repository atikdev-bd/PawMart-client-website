import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="grow max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
