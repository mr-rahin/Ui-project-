import ChangeDigits from "./ChangeDigits";
import ChangeToFa from "./ChangeToFa";

 function GetDiscontAmmount({amount = 0, percent = 0}){

  const dataAmount = parseInt(amount.replace('/', ''));
  const dataPrecent = parseFloat(percent.replace('%' , ''))
  const data = (Math.floor(dataAmount - dataAmount * (dataPrecent / 100)))
    return  <ChangeToFa number={data} />
    
}
export default GetDiscontAmmount

