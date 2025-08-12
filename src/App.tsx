import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotificationBar from './components/NotificationBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import WebHostingPage from './pages/WebHostingPage';
import MobileAppsPage from './pages/MobileAppsPage';
import BusinessAnalyticsPage from './pages/BusinessAnalyticsPage';
import FaceSitePage from './pages/FaceSitePage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const notifications = [
    "🚀 New AI features released! Check out our latest updates.",
    // "💡 Introducing ScanMe v2.0 - Enhanced menu analytics and customer insights.",
    // "🌐 Limited time offer: Get 20% off on our web development services.",
    // "📱 Our mobile app is now available on iOS and Android!",
    // "🎉 Join our webinar on AI in the restaurant industry - Register now!"
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <NotificationBar notifications={notifications} />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/web-hosting" element={<WebHostingPage />} />
            <Route path="/mobile-apps" element={<MobileAppsPage />} />
            <Route path="/business-analytics" element={<BusinessAnalyticsPage />} />
            <Route path="/facesite" element={<FaceSitePage />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;