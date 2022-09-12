import Navbar from "../Navbar/Navbar"
import Footer from "../Navbar/Footer"
const Layout = ({children}) => {
    return (<>
    <Navbar/>
    <main>
        {children}
    </main>
    <Footer/>
    </>)
    
}

export default Layout;