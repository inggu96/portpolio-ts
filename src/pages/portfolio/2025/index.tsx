import { Analytics } from "@vercel/analytics/react";
import ProfileSection from "./sections/Profile";
import CareerSection from "./sections/Career";
import SideProjectSection from "./sections/SideProject";

const Portfolio2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Analytics />
      <main className="container px-4 py-16 mx-auto max-w-4xl">
        {/* Profile Section */}
        <ProfileSection />

        {/* Career Position */}
        <CareerSection />

        {/* Side Project */}
        <SideProjectSection />
      </main>
    </div>
  );
};

export default Portfolio2025;
