import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Tag, Archive } from 'lucide-react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            setProducts(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch products');
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`/api/products/${id}`);
                setProducts(products.filter(p => p.id !== id));
            } catch (err) {
                alert('Failed to delete product');
            }
        }
    };

    if (loading) return <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>Loading products...</div>;
    if (error) return <div className="container" style={{ color: 'var(--danger)', textAlign: 'center', marginTop: '4rem' }}>{error}</div>;

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>My Products</h1>
                <span style={{ color: 'var(--text-secondary)' }}>{products.length} Items</span>
            </div>

            {products.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                    <Archive size={48} style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }} />
                    <h3 style={{ margin: '0 0 1rem 0' }}>No products found</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Start by adding your first product to the inventory.</p>
                    <Link to="/add" className="btn btn-primary">Add Product</Link>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {products.map(product => (
                        <div key={product.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{product.name}</h3>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent)' }}>${Number(product.price).toFixed(2)}</span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                    <Tag size={14} />
                                    <span>{product.category}</span>
                                    <span style={{ margin: '0 0.5rem' }}>•</span>
                                    <span>Stock: {product.stock}</span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                                <Link to={`/edit/${product.id}`} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                                    <Edit size={16} /> Edit
                                </Link>
                                <button onClick={() => handleDelete(product.id)} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center', borderColor: 'var(--danger)', color: 'var(--danger)' }}>
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
