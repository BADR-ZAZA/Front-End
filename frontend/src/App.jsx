import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ padding: '2rem 0' }}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<ProductForm />} />
            <Route path="/edit/:id" element={<ProductForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
