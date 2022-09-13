import Navbar from "../Navbar/Navbar"
import Footer from "../Navbar/Footer"
const Layout = ({children}) => {
    return (<div className="min-h-screen flex flex-col">
    <Navbar/>
    <main className="flex flex-col grow">
        {children}
    </main>
    <Footer/>
    </div>)
    
}

export default Layout;