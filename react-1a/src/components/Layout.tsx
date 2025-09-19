import { Outlet } from "react-router-dom"
import Header from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const Layout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout