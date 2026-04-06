import React,{useEffect,useState} from "react";
import { getMillets } from "../../api/milletApi";
import Loader from "../../components/Loader";

function FarmerDashboard(){

const [millets,setMillets]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(()=>{

const fetchData=async()=>{

try{

const res=await getMyMillets();
setMillets(res.data);

}
catch(err){
console.log(err);
}

setLoading(false);

}

fetchData();

},[])

if(loading) return <Loader/>

return(

<div className="container py-4">

{/* HEADER */}

<div className="d-flex justify-content-between align-items-center mb-4">

<h2 className="text-success fw-bold">
🌾 Farmer Dashboard
</h2>

<button className="btn btn-success" >
+ Add Millet
</button>

</div>


{/* STATS */}

<div className="row mb-4">

<div className="col-md-4">
<div className="card shadow-sm">
<div className="card-body">
<h6>Total Millets</h6>
<h3>{millets.length}</h3>
</div>
</div>
</div>

<div className="col-md-4">
<div className="card shadow-sm">
<div className="card-body">
<h6>Total Stock</h6>
<h3>
{millets.reduce((a,b)=>a+b.quantity,0)} kg
</h3>
</div>
</div>
</div>

</div>


{/* MILLET LIST */}

{millets.length===0 ? (

<div className="alert alert-warning">
You have not added any millets yet
</div>

):( 

<div className="row g-4">

{millets.map((m)=>(

<div key={m._id} className="col-sm-6 col-md-4 col-lg-3">

<div className="card shadow-sm h-100">

<div className="card-body">

<h5 className="fw-bold">{m.name}</h5>

<p>Price: ₹{m.price}</p>

<p>Stock: {m.quantity} kg</p>

<div className="d-flex gap-2">

<button className="btn btn-sm btn-primary w-100">
Edit
</button>

<button className="btn btn-sm btn-danger w-100">
Delete
</button>

</div>

</div>

</div>

</div>

))}

</div>

)}

</div>

)

}

export default FarmerDashboard;