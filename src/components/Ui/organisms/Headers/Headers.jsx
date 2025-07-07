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
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../molecules/Slider/Slider';


function Headers() {
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
                    <Img src='./assets/Icon/Heart.svg' />
                </div>
                <div className='search-container'>
                    <div className='search-icon'>
                        <Img src={'./assets/Icon/Search.svg'} />
                    </div>

                    <CheckLun placeHolder={'محصول مورد نظر را جستجو کنید'}  type={'text'}/>

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
                    <Link  className='ctegorization-link'>
                        <P>سوالات متداول</P>
                    </Link>
                </div>
            </section>  
            <div className='line-hr2' ></div>
            <div className='header-slidebar'>
                
                <Slider/>
               
            </div>
        </header>
        

    );
}

export default Headers;