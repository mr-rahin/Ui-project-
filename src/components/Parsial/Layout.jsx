import Routesc from "../Pages/Routesc"
import Footer from "../Ui/organisms/footer/Footer"
import Headers from "../Ui/organisms/Headers/Headers"


function Layout({children}){
    return(
        <>
        <Headers/>
        <main>{children}</main>
        <Footer/> 
        </>
    )
}

export default Layout