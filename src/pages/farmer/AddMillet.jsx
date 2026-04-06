import { useState } from "react";
import { addMillet } from "../../api/milletApi";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

function AddMillet() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        nameEnglish: "",
        nameHindi: "",
        type: "",
        location: "",
        price: "",
        quantity: "",
        harvestDate: "",
        minOrder: "",
        description: "",
        organic: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.nameEnglish || !form.price || !form.quantity) {
            alert("Please fill all required fields");
            return;
        }

        setLoading(true);

        try {
            await addMillet(form);

            alert("Millet Added Successfully 🌾");

            navigate("/farmer/dashboard");
        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        }

        setLoading(false);
    };

    if (loading) return <Loader />;

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div
                        className="card shadow-lg border-0"
                        style={{ borderRadius: "18px" }}
                    >
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="fw-bold">Add New Product</h4>
                                <button
                                    className="btn-close"
                                    onClick={() => navigate(-1)}
                                ></button>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">
                                            Name (English) *
                                        </label>
                                        <input
                                            name="nameEnglish"
                                            value={form.nameEnglish}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="e.g. Organic Jowar"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">नाम (हिंदी)</label>
                                        <input
                                            name="nameHindi"
                                            value={form.nameHindi}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="जैविक ज्वार"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">
                                            Millet Type *
                                        </label>
                                        <select
                                            name="type"
                                            value={form.type}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                            <option value="">Select Type</option>
                                            <option>Jowar</option>
                                            <option>Bajra</option>
                                            <option>Ragi</option>
                                            <option>Foxtail</option>
                                            <option>Kodo</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Location</label>
                                        <select
                                            name="location"
                                            value={form.location}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                            <option value="">Select Location</option>
                                            <option>Rajasthan</option>
                                            <option>Haryana</option>
                                            <option>Punjab</option>
                                            <option>Madhya Pradesh</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">
                                            Price (₹/quintal) *
                                        </label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={form.price}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="2200"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">
                                            Available Qty (quintals) *
                                        </label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={form.quantity}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="50"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">
                                            Harvest Date
                                        </label>
                                        <input
                                            type="date"
                                            name="harvestDate"
                                            value={form.harvestDate}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">
                                            Min. Order (qtl)
                                        </label>
                                        <input
                                            type="number"
                                            name="minOrder"
                                            value={form.minOrder}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="1"
                                        />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            rows="3"
                                            name="description"
                                            value={form.description}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Describe quality, growing method..."
                                        />
                                    </div>

                                    <div className="col-12 mb-3">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                name="organic"
                                                checked={form.organic}
                                                onChange={handleChange}
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label">
                                                Certified Organic
                                            </label>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <button className="btn btn-success flex-grow-1">
                                            ✔ Add Product
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() => navigate(-1)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMillet;