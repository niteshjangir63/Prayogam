import React,{useEffect,useState} from "react";
import {getOrders} from "../../api/orderApi";
import Loader from "../../components/Loader";

function FarmerOrders(){

const [orders,setOrders]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(()=>{

const fetchOrders=async()=>{

try{

const res=await getOrders();
setOrders(res.data);

}
catch(err){
console.log(err);
}

setLoading(false);

}

fetchOrders();

},[])

if(loading) return <Loader/>
if(!orders) return;

return(

<div>

<h2 className="mb-4">Orders Received</h2>

<div className="table-responsive">

<table className="table table-bordered">

<thead>

<tr>
<th>Customer</th>
<th>Millet</th>
<th>Quantity</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{orders.map((o,i)=>(
<tr key={i}>

<td>{o.customerName}</td>
<td>{o.milletName}</td>
<td>{o.quantity} kg</td>
<td>{o.status}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default FarmerOrders;