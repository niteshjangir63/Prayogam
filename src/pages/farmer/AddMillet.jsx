import { useState } from "react";
import { addMillet } from "../../api/milletApi";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

function AddMillet() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);

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

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleImageChange = (e) => {

        const files = Array.from(e.target.files);

        setImages(files);

        const previewUrls = files.map((file) =>
            URL.createObjectURL(file)
        );

        setPreviews(previewUrls);
    };

    const removeImage = (index) => {

        const newImages = [...images];
        const newPreviews = [...previews];

        newImages.splice(index, 1);
        newPreviews.splice(index, 1);

        setImages(newImages);
        setPreviews(newPreviews);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!form.nameEnglish || !form.price || !form.quantity) {
            alert("Please fill all required fields");
            return;
        }

        const formData = new FormData();

        Object.keys(form).forEach((key) => {
            formData.append(key, form[key]);
        });

        images.forEach((image) => {
            formData.append("photos", image);
        });

        setLoading(true);

        try {

            await addMillet(formData);

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

                    <div className="card shadow-lg border-0" style={{ borderRadius: "18px" }}>

                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="fw-bold">Add New Product</h4>
                                <button className="btn-close" onClick={() => navigate(-1)}></button>
                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="row">

                                    {/* IMAGE INPUT */}

                                    <div className="col-12 mb-3">

                                        <label className="form-label">Product Photos</label>

                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="form-control"
                                        />

                                    </div>

                                    {/* IMAGE PREVIEW */}

                                    {previews.length > 0 && (

                                        <div className="col-12 mb-3">

                                            <div className="d-flex flex-wrap gap-3">

                                                {previews.map((img, index) => (

                                                    <div key={index} style={{ position: "relative" }}>

                                                        <img
                                                            src={img}
                                                            alt="preview"
                                                            style={{
                                                                width: "120px",
                                                                height: "120px",
                                                                objectFit: "cover",
                                                                borderRadius: "10px",
                                                                border: "1px solid #ddd"
                                                            }}
                                                        />

                                                        <button
                                                            type="button"
                                                            onClick={() => removeImage(index)}
                                                            style={{
                                                                position: "absolute",
                                                                top: "-8px",
                                                                right: "-8px",
                                                                background: "red",
                                                                color: "white",
                                                                border: "none",
                                                                borderRadius: "50%",
                                                                width: "22px",
                                                                height: "22px",
                                                                fontSize: "12px",
                                                                cursor: "pointer"
                                                            }}
                                                        >
                                                            ✕
                                                        </button>

                                                    </div>

                                                ))}

                                            </div>

                                        </div>

                                    )}

                                    {/* NAME ENGLISH */}

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Name (English) *</label>
                                        <input
                                            name="nameEnglish"
                                            value={form.nameEnglish}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* NAME HINDI */}

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">नाम (हिंदी)</label>
                                        <input
                                            name="nameHindi"
                                            value={form.nameHindi}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* TYPE */}

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Millet Type *</label>
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

                                    {/* LOCATION */}

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

                                    {/* PRICE */}

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Price (₹/quintal) *</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={form.price}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* QUANTITY */}

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Available Qty *</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={form.quantity}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* HARVEST DATE */}

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Harvest Date</label>
                                        <input
                                            type="date"
                                            name="harvestDate"
                                            value={form.harvestDate}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* MIN ORDER */}

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Min Order</label>
                                        <input
                                            type="number"
                                            name="minOrder"
                                            value={form.minOrder}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* DESCRIPTION */}

                                    <div className="col-12 mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            rows="3"
                                            name="description"
                                            value={form.description}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </div>

                                    {/* ORGANIC */}

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

                                    {/* BUTTONS */}

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