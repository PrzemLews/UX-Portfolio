import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function Root() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1 pt-[69px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}