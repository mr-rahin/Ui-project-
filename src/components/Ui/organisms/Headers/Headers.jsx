import './Header.css';
import Img from '../../atoms/Img/Img';
import P from '../../atoms/P/P';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import CheckLun from '../../../../Hook/Checklun';
import SearchSelect from '../../molecules/Serach-select/SearchSelect';
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import "@fontsource/inter/400-italic.css";
import { use, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../molecules/Slider/Slider';


function Headers() {
    const [like, setLike] = useState(false)
    return (
        <header>
            <section>
                <div className="header-container">
                    <div className="header-content">
                        <div className="header-item">
                            <span className="phone-prefix">۰۹۲۱</span>
                            <P style="phone-number">۲۳۴ ۴۵۶۶</P>
                            <P style="support-text">شماره تماس و پشتیبانی</P>
                            <Img src="./assets/Icon/Group 5.svg" />
                        </div>

                        <div className="header-item">
                            <P style="support-text">meymandiarman@gmail.com :ایمیل</P>
                            <Img src="./assets/Icon/Message.svg" />
                        </div>

                        <div className="header-item">
                            <P style="destnation-text">آدرس : شیراز، ملاصدرا، خیابان معدل، ساختمان ۵</P>
                            <Img src="./assets/Icon/Group 48095819.svg" />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="sign-container">
                    <Img src='./assets/Icon/Group 8.svg' />
                    <div className="sign-in-sign-up">
                        <Button style='yekan-bakh'><span>ورود/ثبت نام</span><Img src='./assets/Icon/Group 9.svg' className={'profile'} /></Button>
                    </div>
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="red" xmlns="http://www.w3.org/2000/svg" onClick={() => setLike(!like)} style={{cursor:"pointer"}}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2543 1.37559C13.0158 0.261923 15.3558 -0.0457441 17.3773 0.602089C21.7745 2.02017 23.1395 6.81392 21.9186 10.6283C20.0347 16.6192 11.9888 21.0879 11.6475 21.2753C11.5262 21.3425 11.3918 21.3761 11.2575 21.3761C11.1232 21.3761 10.9899 21.3436 10.8686 21.2775C10.5295 21.0923 2.54208 16.6896 0.595335 10.6294L0.594252 10.6283C-0.627749 6.81284 0.732918 2.01801 5.12583 0.602089C7.1885 -0.0652441 9.43642 0.228339 11.2543 1.37559ZM5.62417 2.14909C2.06975 3.29526 1.17708 7.11834 2.14233 10.1333C3.66117 14.8588 9.66175 18.6797 11.2564 19.6254C12.8565 18.6699 18.9004 14.8068 20.3705 10.1376C21.3358 7.11942 20.4398 3.29634 16.88 2.14909C15.1553 1.59551 13.1436 1.93242 11.7548 3.00709C11.4644 3.23026 11.0614 3.23459 10.7689 3.01359C9.29775 1.90751 7.37592 1.58359 5.62417 2.14909ZM15.84 4.30048C17.3166 4.77823 18.3512 6.08581 18.4779 7.63173C18.5137 8.07915 18.1811 8.47131 17.7337 8.50706C17.7109 8.50923 17.6893 8.51031 17.6665 8.51031C17.2473 8.51031 16.8919 8.18856 16.8573 7.7639C16.7858 6.8734 16.1899 6.12156 15.3417 5.84748C14.9138 5.70881 14.6798 5.25056 14.8173 4.82481C14.9571 4.39798 15.411 4.16615 15.84 4.30048Z" fill={`${like ? 'red' : '#A5A5A5'}`} />
                    </svg>
                </div>
                <div className='search-container'>
                    <div className='search-icon'>
                        <Img src={'./assets/Icon/Search.svg'} />
                    </div>

                    <CheckLun placeHolder={'محصول مورد نظر را جستجو کنید'} type={'text'} />

                    <div className='line'></div>


                    <SearchSelect className={'search-select'} >

                    </SearchSelect>

                </div>
                <P style={'logo-style'}>LOGO</P>

            </section>

            <div className='line-hr'></div>

            <section>
                <div className="ctegorization-container">
                    <P>دسته بندی محصولات</P>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1875 2.35938C0.941406 2.35938 0.75 2.16797 0.75 1.92188V0.828125C0.75 0.609375 0.941406 0.390625 1.1875 0.390625H12.5625C12.7812 0.390625 13 0.609375 13 0.828125V1.92188C13 2.16797 12.7812 2.35938 12.5625 2.35938H1.1875ZM1.1875 6.73438C0.941406 6.73438 0.75 6.54297 0.75 6.29688V5.20312C0.75 4.98438 0.941406 4.76562 1.1875 4.76562H12.5625C12.7812 4.76562 13 4.98438 13 5.20312V6.29688C13 6.54297 12.7812 6.73438 12.5625 6.73438H1.1875ZM1.1875 11.1094C0.941406 11.1094 0.75 10.918 0.75 10.6719V9.57812C0.75 9.35938 0.941406 9.14062 1.1875 9.14062H12.5625C12.7812 9.14062 13 9.35938 13 9.57812V10.6719C13 10.918 12.7812 11.1094 12.5625 11.1094H1.1875Z" fill="white" />
                    </svg>
                </div>
                <div className='ctegorization-select'>
                    <Link className='ctegorization-link'>
                        <P>صفحه نخست</P>
                    </Link>
                    <Link className='ctegorization-link'>
                        <P>آرشیو بلاگ</P>
                    </Link>
                    <Link className='ctegorization-link'>
                        <P>فروشگاه</P>
                    </Link>
                    <Link className='ctegorization-link'>
                        <P>سوالات متداول</P>
                    </Link>
                </div>
            </section>
            <div className='line-hr2' ></div>
            <div className='header-slidebar'>
            
                <Slider />

            </div>
        </header>


    );
}

export default Headers;