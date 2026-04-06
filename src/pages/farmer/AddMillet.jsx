import React,{useState} from "react";
import {addMillet} from "../../api/milletApi";
import Loader from "../../components/Loader";

function AddMillet(){

const [loading,setLoading]=useState(false);

const [form,setForm]=useState({
name:"",
price:"",
quantity:"",
location:""
});

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
}

const handleSubmit=async(e)=>{

e.preventDefault();

setLoading(true);

try{

await addMillet(form);

alert("Millet Added");

setForm({
name:"",
price:"",
quantity:"",
location:""
})

}
catch(err){
console.log(err);
}

setLoading(false);

}

if(loading) return <Loader/>

return(

<div className="row justify-content-center">

<div className="col-md-6">

<h3 className="mb-3">Add Millet</h3>

<form onSubmit={handleSubmit}>

<input
name="name"
value={form.name}
onChange={handleChange}
className="form-control mb-2"
placeholder="Millet Name"
/>

<input
name="price"
value={form.price}
onChange={handleChange}
className="form-control mb-2"
placeholder="Price"
/>

<input
name="quantity"
value={form.quantity}
onChange={handleChange}
className="form-control mb-2"
placeholder="Quantity (kg)"
/>

<input
name="location"
value={form.location}
onChange={handleChange}
className="form-control mb-3"
placeholder="Farm Location"
/>

<button className="btn btn-success w-100">
Add Millet
</button>

</form>

</div>

</div>

)

}

export default AddMillet;