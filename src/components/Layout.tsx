import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import UtilityBar from './UtilityBar'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <UtilityBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
