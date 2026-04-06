import React from "react";

function RoleToggle({role,setRole}){

return(

<div className="d-flex gap-2 mb-3">

<button
className={`btn ${role==="customer"?"btn-success":"btn-outline-success"}`}
onClick={()=>setRole("customer")}
>
Customer
</button>

<button
className={`btn ${role==="farmer"?"btn-success":"btn-outline-success"}`}
onClick={()=>setRole("farmer")}
>
Farmer
</button>

</div>

)

}

export default RoleToggle;