import React, { useState } from "react";
import "./AddMillets.css";

export default function AddMillets({ onAddMillet }) {
  const [millet, setMillet] = useState({
    name: "",
    price: "",
    quantity: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setMillet((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!millet.name || !millet.price || !millet.quantity) {
      alert("Please fill all fields");
      return;
    }
    onAddMillet(millet);
    setMillet({ name: "", price: "", quantity: "", image: null });
  };

  return (
    <form className="add-millet-form" onSubmit={handleSubmit}>
      <h2>Add Millet</h2>
      <input
        type="text"
        name="name"
        placeholder="Millet Name"
        value={millet.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={millet.price}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={millet.quantity}
        onChange={handleChange}
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />
      <button type="submit">Add Millet</button>
    </form>
  );
}