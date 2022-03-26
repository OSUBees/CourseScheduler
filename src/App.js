import logo from './logo.svg';
import Prerequisites from "./components/Prerequisites/Prerequisites";
import './App.css';
//temp 数据
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
function App() {
  return (
    
      <Prerequisites/>
      
    
  );
}

export default App;
