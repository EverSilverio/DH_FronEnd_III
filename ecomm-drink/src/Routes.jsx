import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Beer from './pages/Beer'
import Navbar from './components/Navbar';

const MainRoutes = () => {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beer/:id" element={<Beer />} />
         </Routes>
      </Router>
   )
}

export default MainRoutes