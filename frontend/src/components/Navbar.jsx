import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, PlusCircle, Home } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>
                    <ShoppingBag size={28} />
                    <span>StoreManager</span>
                </Link>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/" className={`btn ${location.pathname === '/' ? 'btn-primary' : 'btn-secondary'}`}>
                        <Home size={18} />
                        Products
                    </Link>
                    <Link to="/add" className={`btn ${location.pathname === '/add' ? 'btn-primary' : 'btn-secondary'}`}>
                        <PlusCircle size={18} />
                        Add Product
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
