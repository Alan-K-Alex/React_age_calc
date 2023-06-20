import React from "react";

function AgeResult(props)
{
    console.log(props);

    return(
<div>
    
    <h6 className="mt-10 text-2xl font-bold text-gray-900">You are {props.age[0]} years , {props.age[1]} months,{props.age[2]} days old</h6>
</div>

    )
}

export default AgeResult;