import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { TestimonialSection } from './components/sections/TestimonialSection';
import { ArticlesSection } from './components/sections/ArticlesSection';
import { EventsSection } from './components/sections/EventsSection';
import { ContactSection } from './components/sections/ContactSection';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  // Update page title
  useEffect(() => {
    document.title = "Afterlife - Exploring the Journey Beyond";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ResourcesSection />
        <TestimonialSection />
        <EventsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;