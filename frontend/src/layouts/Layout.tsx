import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-800 text-white h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout 