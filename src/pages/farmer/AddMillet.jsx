import {useState} from "react";
import {addMillet} from "../../api/milletApi";
import Loader from "../../components/Loader";
import {useNavigate} from "react-router-dom";

function AddMillet(){

const navigate = useNavigate();

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

/* simple validation */

if(!form.name || !form.price || !form.quantity){
alert("Please fill all required fields");
return;
}

setLoading(true);

try{

await addMillet(form);

alert("Millet Added Successfully 🌾");

setForm({
name:"",
price:"",
quantity:"",
location:""
});

/* redirect to farmer dashboard */

navigate("/farmer/dashboard");

}
catch(err){

console.log(err);
alert("Something went wrong");

}

setLoading(false);

}

if(loading) return <Loader/>

return(

<div className="container py-4">

<div className="row justify-content-center">

<div className="col-md-6">

<div className="card shadow-sm">

<div className="card-body">

<h3 className="mb-4 text-success text-center">
🌾 Add Millet
</h3>

<form onSubmit={handleSubmit}>

<input
name="name"
value={form.name}
onChange={handleChange}
className="form-control mb-3"
placeholder="Millet Name"
/>

<input
type="number"
name="price"
value={form.price}
onChange={handleChange}
className="form-control mb-3"
placeholder="Price (₹)"
/>

<input
type="number"
name="quantity"
value={form.quantity}
onChange={handleChange}
className="form-control mb-3"
placeholder="Quantity (kg)"
/>

<input
name="location"
value={form.location}
onChange={handleChange}
className="form-control mb-4"
placeholder="Farm Location"
/>

<button
className="btn btn-success w-100"
disabled={loading}
>
Add Millet
</button>

</form>

</div>

</div>

</div>

</div>

</div>

)

}

export default AddMillet;