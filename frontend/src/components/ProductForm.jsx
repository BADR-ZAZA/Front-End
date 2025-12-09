import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Save, ArrowLeft } from 'lucide-react';

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        category: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isEditMode) {
            fetchProduct();
        }
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`/api/products/${id}`);
            const { name, price, stock, category } = response.data;
            setFormData({ name, price, stock, category });
        } catch (err) {
            setError('Failed to fetch product details');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const submissionData = {
            ...formData,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock, 10)
        };

        try {
            if (isEditMode) {
                await axios.put(`/api/products/${id}`, submissionData);
            } else {
                await axios.post('/api/products', submissionData);
            }
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || err.response?.data?.message || 'Something went wrong');
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <button onClick={() => navigate('/')} className="btn btn-secondary" style={{ marginBottom: '2rem' }}>
                <ArrowLeft size={18} /> Back to Products
            </button>

            <div className="card">
                <h1 style={{ fontSize: '1.75rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    {isEditMode ? 'Edit Product' : 'Add New Product'}
                </h1>

                {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid var(--danger)' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                            placeholder="e.g. Wireless Headphones"
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label className="form-label">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="form-input"
                                required
                                step="0.01"
                                min="0"
                                placeholder="0.00"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Stock Quantity</label>
                            <input
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                className="form-input"
                                required
                                min="0"
                                placeholder="0"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="form-input"
                            required
                            placeholder="e.g. Electronics"
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            <Save size={18} />
                            {loading ? 'Saving...' : 'Save Product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
