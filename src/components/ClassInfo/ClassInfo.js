import React from "react";


export default function ClassInfo(prop) {
  return (<div className="class">
            
    <div className="class-name" >
         <p>{prop.section.name}</p> 
              
    </div>
    <div className="class-info">
          <p >Credit: {prop.section.credit}</p>
  
    </div>
</div>)
}

  