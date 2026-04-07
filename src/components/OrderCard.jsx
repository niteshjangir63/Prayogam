
export default function OrderCard({order}){

const steps = ["placed","processing","shipped","delivered"];

const currentStep = steps.indexOf(order.status);

return(

<div className="card shadow-sm mb-4 p-4">

<div className="d-flex justify-content-between">

<div>
<h5 className="fw-bold">{order.milletName}</h5>
<p className="text-muted">
Order #{order._id?.slice(-5)} • {order.quantity} kg
</p>
</div>

<div className="text-end">
<h5 className="text-success">₹{order.price}</h5>
<span className="badge bg-success text-capitalize">
{order.status}
</span>
</div>

</div>

{/* ORDER TRACKER */}

<div className="d-flex justify-content-between align-items-center mt-4">

{steps.map((step,index)=>{

const active = index <= currentStep;

return(

<div key={step} className="text-center flex-fill">

<div className={`step-circle ${active ? "active" : ""}`}>
✔
</div>

<p className="small mt-2 text-capitalize">
{step}
</p>

{index !== steps.length-1 && (
<div className={`step-line ${index < currentStep ? "active" : ""}`}></div>
)}

</div>

)

})}

</div>

</div>

)

}

;