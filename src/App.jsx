import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ApplicationFlowLayout from './pages/ApplicationFlowLayout';
import ApplicationStepPage from './pages/ApplicationStepPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply/:flowType" element={<ApplicationFlowLayout />}>
            <Route path=":step" element={<ApplicationStepPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
