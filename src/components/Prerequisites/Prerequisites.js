import React from "react";
import ClassInfo from "../ClassInfo/ClassInfo.js";
const class1 = 
  {
    id: "c1",
    name: "CSE2221",
    description: "Software 1",
    credit: 4,
}
const class2 = 
  {
    id: "c2",
    name: "CSE2231",
    description: "Software 2",
    credit: 3,
}
const class3 = 
{
  id: "c3",
  name: "CSE2321",
  description: "Foundation 1",
  credit: 3,
}
export default function Prerequisites(prop) {
    return (<div className="w-25 p-3 text-center bg-secondary  shadow rounded-3 ">
         <div className="shadow my-2 bg-light rounded-3 p-2">
        <h3>Prerequisites Met</h3>
            <div className="shadow-sm d-flex justify-content-between flex-wrap">
            
            
            <ClassInfo section={class1}/>
            <ClassInfo section={class2}/>
          <ClassInfo section={class3} />
            </div>
        </div>
        <div className="shadow my-2 bg-light rounded-3 p-2">
        <h3>Prerequisites Met</h3>
        <div className="shadow-sm d-flex justify-content-between flex-wrap">
            
         
            
            <ClassInfo section={class1}/>
            <ClassInfo section={class2}/>
            <ClassInfo section={class3}/>
        </div>
        </div>
    </div>)
    
}

  