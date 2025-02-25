import { Navigation } from "@/components/layout/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {" "}
        {/* Navigation 높이만큼 padding-top */}
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
