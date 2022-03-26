import React from "react";


export default function ClassInfo(prop) {
  return (<div className="class">
            
    <div className="class-name" >
         <h1>{prop.section.name}</h1> 
              
    </div>
    <div className="class-info">
          <p >Credit: {prop.section.credit}</p>
  
    </div>
</div>)
}

  