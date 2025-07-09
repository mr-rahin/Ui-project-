

import { digitsEnToFa } from "@persian-tools/persian-tools";
import ChangeDigits from "./ChangeDigits";
function ChangeToFa({number}){
    const change =digitsEnToFa(number)
    return <ChangeDigits num={change} />
}
export default ChangeToFa