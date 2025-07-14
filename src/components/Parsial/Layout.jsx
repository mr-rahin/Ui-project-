// Layout.jsx

import Routesc from "../Pages/Routesc"
import Footer from "../Ui/organisms/footer/Footer"
import Headers from "../Ui/organisms/Headers/Headers"
import "./Layout.css" 

function Layout({ children }) {
  return (
    <div className="layout">
      <Headers />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
