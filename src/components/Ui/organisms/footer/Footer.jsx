import P from "../../atoms/P/P"

import { footerItems, footerIcon } from "../../../Pages/Home-page/ArrayItems"
import './Footer.css'
import Icon from "../../atoms/Icon"
import React from "react"
import Img from "../../atoms/Img/Img"
import H4 from "../../atoms/H4/H4"
import Input from "../../atoms/Input/Input"
import Button from "../../atoms/Button/Button"
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-cart">
                    <div className="cart-icon">
                        {footerItems.map((item) => (
                            <React.Fragment key={item.id}>
                                <P> {item.title}<Icon action={item.svg} /></P>

                            </React.Fragment>
                        ))}
                    </div>
                    <div className="footer-main">
                        <Img src={'../assets/images/image21.png'} />
                        <div className="footer-column">
                            <H4>دسترسی سریع</H4>
                            <P>صفحه اصلی</P>
                            <P>حساب کاربری</P>
                            <P>تماس با ما</P>
                        </div>
                        <div className="footer-column">
                            <H4>لینک های داغ</H4>
                            <P>فرصت های شغلی</P>
                            <P>قوانین و مقررات</P>
                            <P>درباره ما</P>
                        </div>
                    </div>
                    <div className="subscribe-group">
                        <div className="subscribe-box">
                        <P>از تخفیفات باخبر شو</P>
                           <div>
                             <Input type="text" placeholder="ایمیل خود را وارد کنید" />
                            <Button>عضو شوید</Button>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="footer-last-icon">
                    {footerIcon.map((item)=>(
                        <div className="icon-card">
                            <Icon action={item.svg} />
                        </div>
                    ))}
                </div>
                <P style={'footer-copy'}>کلیه حقوق مادی و معنوی دوره ها متعلق به این وبسایت می باشد.</P>
            </footer>
        </>
    )

}
export default Footer