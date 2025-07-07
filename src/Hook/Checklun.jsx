import { useState } from "react"
import Input from "../components/Ui/atoms/Input/Input"



function CheckLun({placeHolder, value, className, type}){
    const [dir, setDir] = useState('')
    function changeDirHandler(e){
        // console.log(e.target.value);
        
        const isEnglish = /^[A-Za-z\s]+$/.test(e.target.value);
        const isPersian = /^[\u0600-\u06FF\s]+$/.test(e.target.value);
        if (isEnglish){
           setDir('En'); 
        }  
        if (isPersian) {
            setDir('Pa');
        } 
    }
    return <Input className={`search-input search-input-${dir}`} placeHolder={placeHolder}  onChange={changeDirHandler} type={type}/>
}
export default CheckLun