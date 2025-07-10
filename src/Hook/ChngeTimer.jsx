import React, { useEffect, useState } from "react";
import ChangeToFa from "./ChangeToFa";

const TimerComponent = ({
    callBackFinishtimer = () => { },
    contStyle = "", initialDay, initialHour = 0, initialMinute = 0, initialSeconds = 5, }) => {
    const [day, setDay] = useState(initialDay)
    const [hours, setHours] = useState(initialHour);
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prev) => prev - 1);
            } else {
                if (minutes > 0) {
                    setMinutes((prev) => prev - 1);
                    setSeconds(59);
                } else {
                    if (hours > 0) {
                        setHours((prev) => prev - 1);
                        setMinutes(59);
                        setSeconds(59);
                    } else {
                        if (day > 0) {
                            setDay((prev) => prev - 1)
                            setMinutes(59)
                            setHours(59)
                            setSeconds(59)
                        } else {
                            clearInterval(myInterval);
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(myInterval);
    }, [seconds, minutes, hours, day]);

    const HandleUnit = (number) => {
        const formatted = number < 10 ? `0${number}` : number.toString();
        return (
            <div className="cont-min-handle">
                <div className="number-Main-style">{<ChangeToFa number={formatted.charAt(1)}/>}</div>
                <div className="number-Main-style">{<ChangeToFa number={formatted.charAt(0)}/>}</div>
            </div>
        );
    };

    const Timer = () => {
        if (hours === 0 && minutes === 0 && seconds === 0 && day === 0) {
            callBackFinishtimer(true);
            return null;
        } else {
            return (
                <div className={`${contStyle} cont-div`}>
                    {HandleUnit(day)}  {HandleUnit(hours)} {HandleUnit(minutes)}  {HandleUnit(seconds)}
                </div>
            );
        }
    };

    return Timer();
};

export { TimerComponent };



// EX
{/* <TimerComponent
initialSeconds={4}
initialMinute = {0}
callBackFinishtimer={(e)=>console.log('eeeeeee',e)}
contStyle={"aaaaaa"}
/> */}
