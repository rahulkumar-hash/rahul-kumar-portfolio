import { useState } from "react";
import Navbar from "./components/common/Navbar";
import ScrollProgress from "./components/common/ScrollProgress";
import AnimatedBackground from "./components/common/AnimatedBackground";
import CustomCursor from "./components/common/CustomCursor";
import ProjectModal from "./components/common/ProjectModal";
import Toast from "./components/common/Toast";
import Footer from "./components/common/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhatIBuild from "./components/sections/WhatIBuild";
import Experience from "./components/sections/Experience";
import FeaturedProject from "./components/sections/FeaturedProject";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Achievements from "./components/sections/Achievements";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

import { downloadResume } from "./utils/resumeDownload";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  const handleDownloadResume = () => {
    downloadResume();
    showToast("Generating official printable resume for Rahul Kumar...");
  };

  const handleCopyEmail = () => {
    showToast("Email address copied to clipboard!");
  };

  const handleCopyPhone = () => {
    showToast("Phone number copied to clipboard!");
  };

  const handleCopySnippet = () => {
    showToast("Developer config snippet copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Visual background layers */}
      <AnimatedBackground />
      <ScrollProgress />
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onDownloadResume={handleDownloadResume}
          onCopySnippet={handleCopySnippet}
        />
        <About />
        <WhatIBuild />
        <Experience />
        <FeaturedProject onOpenModal={setSelectedProject} />
        <Projects onOpenModal={setSelectedProject} />
        <Skills />
        <Achievements />
        <Education />
        <Contact
          onCopyEmail={handleCopyEmail}
          onCopyPhone={handleCopyPhone}
          onDownloadResume={handleDownloadResume}
        />
      </main>

      {/* Global Footer */}
      <Footer onDownloadResume={handleDownloadResume} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
