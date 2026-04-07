import React, { useEffect, useState } from "react";
import { getMillets } from "../api/milletApi";
import Loader from "../components/Loader";
import MilletCard from "../components/MilletCard";

function Marketplace(){

const [millets,setMillets]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(()=>{

const fetchData=async()=>{

try{

const res=await getMillets();
setMillets(res.data.data);

}
catch(err){
console.log(err);
}

setLoading(false);

}

fetchData();

},[])

if(loading) return <Loader/>
if(!millets) return;

return(

<div>

<h2 className="mb-4">Marketplace</h2>

<div className="row g-3">

{millets.map((m,i)=>(

<div className="col-sm-6 col-md-4 col-lg-3" key={i}>
<MilletCard millet={m}/>
</div>

))}

</div>

</div>

)

}

export default Marketplace;