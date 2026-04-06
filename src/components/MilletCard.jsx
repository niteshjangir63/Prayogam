import React from "react";

function MilletCard({ millet }) {

return (

<div className="card h-100 shadow-sm border-0 product-card">

{/* PRODUCT IMAGE */}

<div className="position-relative">

<img
src={millet.images?.[0] || "https://via.placeholder.com/300x200"}
className="card-img-top"
style={{ height: "200px", objectFit: "cover" }}
/>

{/* ORGANIC BADGE */}

{millet.organic && (
<span className="badge bg-success position-absolute top-0 start-0 m-2">
Organic
</span>
)}

</div>


<div className="card-body d-flex flex-column">

{/* PRODUCT NAME */}

<h5 className="card-title fw-bold">
{millet.name}
</h5>

{/* FARMER */}

<p className="text-muted mb-1">
👨‍🌾 {millet.farmer?.name || "Local Farmer"}
</p>

{/* LOCATION */}

<p className="text-muted mb-2">
📍 {millet.location}
</p>

{/* PRICE */}

<h4 className="text-success fw-bold mb-3">
₹{millet.price} / kg
</h4>

{/* BUTTONS */}

<div className="mt-auto">

<button className="btn btn-success w-100 mb-2">
Buy Now
</button>

<button className="btn btn-outline-success w-100">
Add to Cart
</button>

</div>

</div>

</div>

);

}

export default MilletCard;