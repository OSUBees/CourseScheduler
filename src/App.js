import logo from './logo.svg';
import ClassInfo from "./components/ClassInfo";
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
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      <ClassInfo section={class1}/>
      <ClassInfo section={class2}/>
      <ClassInfo section={class3}/>
    </ul>
  );
}

export default App;
