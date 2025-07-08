
import Img from '../../Ui/atoms/Img/Img'
import P from '../../Ui/atoms/P/P'
import './homepage.css'
function HomePage() {
    return (
        <>
            <div className="camera-container">
                <P style={'maneli camera-p'}>!از هر جایی میتونی چک کنی</P>
                <P style={'yekan camera-cctv'}>دوربین های مداربسته داهوا</P>
                <div className="buy-icon">
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon-arrow'>
                        <path d="M32.5804 0.605713C40.6059 0.605713 46.0168 5.76884 46.0168 13.4737V33.185C46.0168 40.8922 40.6059 46.0758 32.5804 46.0758H14.0059C5.95769 46.0758 0.546753 40.8922 0.546753 33.185V13.4737C0.546753 5.76884 5.95769 0.605713 14.0059 0.605713H32.5804ZM23.7592 13.6102C23.0999 12.9508 22.0086 12.9508 21.3493 13.6102L12.7782 22.1358C12.1416 22.7724 12.1416 23.9091 12.7782 24.5457L21.3493 33.0714C22.0086 33.7307 23.0999 33.7307 23.7592 33.0714C24.4185 32.3893 24.4185 31.3208 23.7592 30.6387L18.1209 25.0459H32.5577C33.5126 25.0459 34.2628 24.2729 34.2628 23.3408C34.2628 22.3859 33.5126 21.6356 32.5577 21.6356H18.1209L23.7592 16.0201C24.0775 15.7018 24.2594 15.2471 24.2594 14.8151C24.2594 14.3854 24.0775 13.9512 23.7592 13.6102Z" fill="white" />
                    </svg>
                    <P style={'yekan buy-p'}>خرید</P>
                </div>
                    <Img src={'./assets/images/cctv.png'} className={'cctv-camera'} />
                    <Img src={'./assets/images/cctv.png'} className={'cctv-camera1'} />
                    <Img src={'./assets/images/cctv.png'} className={'cctv-camera2'} />
            </div>
        </>
    )
}
export default HomePage