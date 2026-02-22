import "./MilletsTable.css";

const millets = [
  { name: "Bajra", price: 120, stock: "50 kg" },
  { name: "Jowar", price: 95, stock: "30 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
  { name: "Ragi", price: 110, stock: "20 kg" },
];

export default function MilletsTable() {
  return (
    <div className="table-box">
      <h3>My Millets</h3>

      <div className="mobile-table">
        <div className="table-header">
          <span>Millet</span>
          <span>Price per kg</span>
          <span>Stock</span>
          <span>Action</span>
        </div>

        {millets.map((m, i) => (
          <div className="table-row" key={i}>
            <span className="millet-name">{m.name}</span>
            <span>₹ {m.price}</span>
            <span>{m.stock}</span>
            <button className="edit-btn">Edit</button>

          </div>
        ))}
      </div>
    </div>
  );
}