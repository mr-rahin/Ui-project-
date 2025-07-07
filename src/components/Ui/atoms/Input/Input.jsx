
import './Input.css'
function Input({placeHolder, value, className, onChange, type}){
    return  <input type={type} 
    placeholder={placeHolder} 
    value={value} 
    className={className}
    onChange={onChange}
    
    />
}
export default Input
