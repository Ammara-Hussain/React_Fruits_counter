import React from "react"
function FruitsCounter({fruits}){
    return(
    <div>
        <h1> Total Count: {fruits.length} </h1>
    </div>
    );
}
export default FruitsCounter;