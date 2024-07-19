import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const DefaultLayout = () => {
    return (<>

        <div className="container max-h-screen ">
            <Header />
            <Outlet />
            <Footer />
        </div>
        
    </>
    )
}