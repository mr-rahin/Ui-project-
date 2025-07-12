
import Img from "../../atoms/Img/Img"
import ChangeDigits from "../../../../Hook/ChangeDigits"
import ChangeToFa from "../../../../Hook/ChangeToFa"
import Button from "../../atoms/Button/Button"
import P from "../../atoms/P/P"
import './Slidermouse.css'
function SliderMouse() {
    const list = [
        { id: 1, name: 'آیپد مینی ۲۰۲۱ ظرفیت ۶۴ گیگابایت', description: 'Apple Ipad Mini 2021 (wifi)', price: '54/200', discount: '%15', img: '../assets/images/Tablet.png' },
        { id: 2, name: 'هدفون بلوتوثی اپل مدل AirPods Max', description: 'Apple AirPods Max Bluetooth', price: '54/200', img: '../assets/images/Airpod.png' },
        { id: 3, name: 'هدفون بلوتوثی اپل مدل AirPods Max', description: 'Apple AirPods Max Bluetooth', price: '54/200', img: '../assets/images/Airpod.png' },
    ]
    return (
        <>
            <div className="grid1">
                {list.map((item, index) => (
                    <div key={index} className="cart1">
                        {item.discount && (
                            <>
                                <P style={'discount1'}>
                                    <ChangeToFa number={item.discount} />تخفیف
                                </P>
                            </>
                        )}
                        <Img src={item.img} className={'img-tablet'}/>
                        <P style={'name'}>{item.name}</P>
                        <P style="desc">{item.description}</P>
                        <P style="price"><ChangeToFa number={item.price} />تومان</P>
                        <Button style="add-btn">افزودن به سبد خرید</Button>
                    </div>
                ))}
            </div>
            <div className="box3-container">
                <P style={'yekan'}>جدیدترین محصولات دیجیتال</P>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M21.126 0L8.874 0C3.5655 0 0 3.414 0 8.4975L0 21.5025C0 26.586 3.5655 30 8.874 30L21.126 30C26.433 30 30 26.5845 30 21.501L30 8.4975C30 3.414 26.433 0 21.126 0Z" fill="#43454D" />
                    <path d="M13.7169 8.58089L8.06937 14.2029C7.64487 14.6259 7.64487 15.3744 8.06937 15.7989L13.7169 21.4209C14.1579 21.8589 14.8704 21.8574 15.3084 21.4164C15.7464 20.9754 15.7464 20.2644 15.3054 19.8249L11.5899 16.1244H21.1224C21.7449 16.1244 22.2474 15.6204 22.2474 14.9994C22.2474 14.3784 21.7449 13.8744 21.1224 13.8744L11.5899 13.8744L15.3054 10.1754C15.5259 9.95489 15.6354 9.66689 15.6354 9.37739C15.6354 9.09089 15.5259 8.80289 15.3084 8.58389C14.8704 8.14439 14.1579 8.14289 13.7169 8.58089Z" fill="#F0F4F6" />
                </svg>

                <Img src={'../assets/images/mouse.png'} />
            </div>

        </>
    )

}

export default SliderMouse  