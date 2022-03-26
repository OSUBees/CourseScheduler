import React from "react";


export default function ClassInfo(prop) {
  return (<div className="m-2 w-auto px-5 py-2 d-flex flex-column bg-primary text-white rounded-3 d-inline-flex">
            
    <div className="d-flex text-center flex-column" >
         <p>{prop.section.name}</p> 
              
    </div>
    <div className="d-flex text-center flex-column">
          <p >Credit: {prop.section.credit}</p>
  
    </div>
</div>)
}

  