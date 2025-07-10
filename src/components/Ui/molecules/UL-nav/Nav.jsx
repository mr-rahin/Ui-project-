import { useState } from "react"
import Icon from "../../atoms/Icon"
import Li from "../../atoms/Li/Li"
import P from "../../atoms/P/P"
import "./Nav.css"
function Nav({ ArrayObj }) {
    const SliderItems = ArrayObj
    const [Active, setActive] = useState(1)
    function ActiveHandler(id){
        setActive(id)
        
    }
return (
    <ul className="nav-bar">
      {SliderItems.map((item, index) => (
        <Li key={index} className={`nav-item ${item.id == Active ? 'active' : '' }`} onClick={() => ActiveHandler(item.id)}>
          <div className="icon" ><Icon action={`${item.id == Active ? item.svg1 : item.svg}`}/></div>
          <P style={'yekan '}>{item.name}</P>
        </Li>
      ))}
    </ul>
  );
}
export default Nav

