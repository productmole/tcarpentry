import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'
import MobileActionBar from './MobileActionBar'
import WhatsAppButton from './WhatsAppButton'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-ochre focus:text-paper focus:font-semibold"
      >
        Skip to main content
      </a>

      <TopBar />
      <Header />

      {/* pb clears the fixed mobile action bar so it never overlaps content */}
      <main id="main-content" className="flex-1 pb-24 md:pb-0">
        <Outlet />
      </main>

      <Footer />

      {/* Persistent call/WhatsApp bar — mobile only */}
      <MobileActionBar />
      {/* Floating WhatsApp — desktop only, where centred content leaves room */}
      <WhatsAppButton />
    </div>
  )
}
