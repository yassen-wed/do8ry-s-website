import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Posts from './pages/Posts';
import About from './pages/About';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        {/* 404 fallback */}
        <Route path="*" element={
          <main className="min-h-screen pt-20 flex items-center justify-center bg-cream">
            <div className="text-center">
              <div className="text-8xl font-black text-navy/20 mb-4">404</div>
              <h1 className="text-2xl font-bold text-navy mb-3">Page not found</h1>
              <a href="/" className="btn-primary">Go Home</a>
            </div>
          </main>
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
