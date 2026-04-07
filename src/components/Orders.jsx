import { useEffect, useState } from "react";
import { getOrders } from "../../api/orderApi";
import Loader from "../../components/Loader";
import OrderCard from "../../components/OrderCard";

export default function Orders(){

const [orders,setOrders] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(()=>{

const fetchOrders = async()=>{

try{

const res = await getOrders();

const data = Array.isArray(res.data) ? res.data : res.data.data;

setOrders(data || []);

}
catch(err){
console.log(err);
}

setLoading(false);

}

fetchOrders();

},[]);

if(loading) return <Loader/>

return(

<div className="container py-4">

<h2 className="fw-bold mb-4">My Orders</h2>

{orders.length === 0 ? (

<div className="alert alert-warning">
No orders yet
</div>

) : (

orders.map(order => (
<OrderCard key={order._id} order={order}/>
))

)}

</div>

)

}
