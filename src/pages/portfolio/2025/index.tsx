import { Analytics } from "@vercel/analytics/react";
import ProfileSection from "./sections/Profile";
import CareerSection from "./sections/Career";
import SideProjectSection from "./sections/SideProject";
import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";

const Portfolio2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Analytics />
      <main className="container max-w-4xl px-4 py-16 mx-auto">
        {/* Profile Section */}
        <ProfileSection />

        {/* Career Position */}
        <CareerSection />

        {/* Side Project */}
        <SideProjectSection />

        {/* Experience */}
        <ExperienceSection />

        {/* Education */}
        <EducationSection />
      </main>
    </div>
  );
};

export default Portfolio2025;
