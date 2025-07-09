import { useState } from "react"
import Button from "../../atoms/Button/Button"
import H4 from "../../atoms/H2/H2"
import Img from "../../atoms/Img/Img"
import P from "../../atoms/P/P"
import './Slider.css'
import GetDiscontAmmount from "../../../../Hook/Discount"
import { useParams } from "react-router-dom"
import ChangeToFa from "../../../../Hook/ChangeToFa"
function SliderMain({ list }) {
    const slider = [0, 1, 2, 3]
    const [slide, setSlide] = useState(0)
    const [value, setValue] =useState('')
    const findImage = list.find((item) => item.id == slide)

    function prevHandler() {
        setSlide((prev) => (prev - 1 + slider.length) % slider.length);

    }
    function nextHandler() {
        setSlide((prev) => (prev + 1) % slider.length);

    }

    return (
        <>

            <div className="grid">
                {list.map((item, index) => (
                    <div key={index} className="cart">
                        <P style={'discount'}><ChangeToFa  number={item.discount}/>تخفیف</P>
                        <Img src={item.img} />
                        <P style={'name'}>{item.name}</P>
                        <P style="desc">{item.description}</P>
                        <P style="price"><ChangeToFa number={item.price}/>تومان</P>
                        <Button style="add-btn">افزودن به سبد خرید</Button>
                    </div>
                ))}
            </div>
            <div className="box2-container">
                <Button style={'left-arrow'} onClick={prevHandler}>
                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path opacity="0.4" d="M18.9149 0.852051C8.55174 0.852051 0.124084 9.28159 0.124084 19.6428C0.124084 30.0041 8.55174 38.4336 18.9149 38.4336C29.2761 38.4336 37.7056 30.0041 37.7056 19.6428C37.7056 9.28159 29.2761 0.852051 18.9149 0.852051Z" fill="#960000" />
                        <path d="M21.6256 11.7115C21.2667 11.7115 20.9059 11.8486 20.6315 12.123L14.0792 18.6434C13.8142 18.9083 13.6658 19.2672 13.6658 19.6431C13.6658 20.017 13.8142 20.3759 14.0792 20.6408L20.6315 27.165C21.1821 27.7137 22.0728 27.7137 22.6233 27.1612C23.172 26.6088 23.1702 25.7162 22.6196 25.1675L17.0707 19.6431L22.6196 14.1186C23.1702 13.5699 23.172 12.6792 22.6233 12.1267C22.349 11.8486 21.9863 11.7115 21.6256 11.7115Z" fill="white" />
                    </svg>
                </Button>

                <P style={'yekan box2-head'}>شگفت انگیز های دیتاپروژکتور</P>
                <div className="slider-image"><Img src={`./assets/images/image${slide}.png`} /></div>
                <Button style={'right-arrow'} onClick={nextHandler}>
                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg " className="rotate ">
                        <path opacity="0.4" d="M18.9149 0.852051C8.55174 0.852051 0.124084 9.28159 0.124084 19.6428C0.124084 30.0041 8.55174 38.4336 18.9149 38.4336C29.2761 38.4336 37.7056 30.0041 37.7056 19.6428C37.7056 9.28159 29.2761 0.852051 18.9149 0.852051Z" fill="#960000" />
                        <path d="M21.6256 11.7115C21.2667 11.7115 20.9059 11.8486 20.6315 12.123L14.0792 18.6434C13.8142 18.9083 13.6658 19.2672 13.6658 19.6431C13.6658 20.017 13.8142 20.3759 14.0792 20.6408L20.6315 27.165C21.1821 27.7137 22.0728 27.7137 22.6233 27.1612C23.172 26.6088 23.1702 25.7162 22.6196 25.1675L17.0707 19.6431L22.6196 14.1186C23.1702 13.5699 23.172 12.6792 22.6233 12.1267C22.349 11.8486 21.9863 11.7115 21.6256 11.7115Z" fill="white" />
                    </svg>

                </Button>
                {slide == 0 ? (
                    <>
                        <P style={'div-name yekan'}>
                            T2 Max ویدئو پروژکتور ونبو مدل
                        </P>
                        <P style={'old-price yekan'}>
                            ۱۱/۰۰۰/۰۰۰
                        </P>
                        <P style={'new-money yekan'}>
                            ۱۰/۲۹۹/۰۰۰
                        </P>
                    </>
                ) : (
                    <>
                        <P style={'div-name-slider yekan'}>
                            {findImage.name}
                        </P>
                        <P style={'old-price-slider yekan'}>
                            <ChangeToFa number={findImage.price}/>
                        </P>
                        <P style={'new-money-slider yekan'}>
                            <GetDiscontAmmount amount={findImage.price} percent={findImage.discount} />
                            
                        </P>
                    </>
                )}
            </div>


        </>
    )
}
export default SliderMain

