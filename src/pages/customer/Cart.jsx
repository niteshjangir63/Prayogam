import React,{useState} from "react";

function Cart(){

const [cart,setCart]=useState([]);
if(!cart) return;
return(

<div>

<h2 className="mb-4">Shopping Cart</h2>

{cart.length===0 ? (

<p>Your cart is empty</p>

):( 

<div className="table-responsive">

<table className="table">

<thead>
<tr>
<th>Millet</th>
<th>Price</th>
<th>Qty</th>
</tr>
</thead>

<tbody>

{cart.map((item,i)=>(
<tr key={i}>

<td>{item.name}</td>
<td>₹{item.price}</td>
<td>{item.qty}</td>

</tr>
))}

</tbody>

</table>

</div>

)}

</div>

)

}

export default Cart;