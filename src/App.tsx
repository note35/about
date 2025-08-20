import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from './About'
import { Resume } from './Resume'
import { Talks } from './Talks'
import { Toys } from './Toys'
import { Blog } from './Blog'
import { Navigator } from './Navigator'
import { Footer } from './Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Hack 404.html to redirect to the url's path.
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath) {
      sessionStorage.removeItem('redirect');
      const repoName = '/' + redirectPath.split('/')[1];
      const targetPath = redirectPath.replace(repoName, '');
      navigate(targetPath || '/', { replace: true });
    }
  }, [navigate]);

  return null; // This component renders nothing
}

function App() {
  const basename = import.meta.env.DEV ? '/' : '/about';

  return (
    <ThemeProvider>
      <Router basename={basename}>
        <RedirectHandler />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Navigator />
          <main className="container mx-auto px-4 py-8 max-w-6xl">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/talks" element={<Talks />} />
              <Route path="/toys" element={<Toys />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
