import { useEffect, useState } from "react";
import { getOrders } from "../../api/orderApi";
import Loader from "../../components/Loader";
import OrderCard from "../../components/OrderCard";
import CustomerNavbar from "../../components/CustomerNavbar";

function CustomerDashboard(){

const [orders,setOrders] = useState([]);
const [loading,setLoading] = useState(true);

const fetchOrders = async()=>{

setLoading(true);

try{

const res = await getOrders();

const data = Array.isArray(res.data) ? res.data : res.data.data;

setOrders(data || []);

}
catch(err){
console.log(err);
alert("Failed to load orders");
}

setLoading(false);

}

useEffect(()=>{
fetchOrders();
},[]);

if(loading) return <Loader/>

return(
    <>
<CustomerNavbar/>
<div className="container py-4">

{/* HEADER */}

<div className="d-flex justify-content-between align-items-center mb-4">

<div>

<h2 className="fw-bold text-success">
📦 My Orders
</h2>

<p className="text-muted mb-0">
Track your millet purchases
</p>

</div>

<button
className="btn btn-outline-success"
onClick={fetchOrders}
>
Refresh
</button>

</div>

{/* ORDERS */}

{orders.length === 0 ? (

<div className="alert alert-info">
You have not placed any orders yet.
</div>

) : (

orders.map(order => (
<OrderCard key={order._id} order={order}/>
))

)}

</div>
</>

)


}

export default CustomerDashboard;