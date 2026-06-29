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

      {/* Floating WhatsApp button matches tcarpentry.co.uk original */}
      <a
        href="https://wa.me/447834772046"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" width="28" height="28" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-98.2 80-178.1 178.3-178.1 47.6 0 92.3 18.5 125.9 52.1 33.6 33.6 52.1 78.3 52.1 125.9 0 98.3-80 178.1-178.2 178.1zm97.8-130.7c-5.3-2.7-31.6-15.6-36.5-17.3-4.9-1.8-8.4-2.7-11.9 2.7-3.5 5.3-13.8 17.3-16.9 20.8-3.1 3.5-6.2 3.9-11.5 1.3-5.3-2.7-22.3-8.2-42.5-26.2-15.7-14-26.3-31.3-29.4-36.6-3.1-5.3-.3-8.1 2.3-10.8 2.4-2.4 5.3-6.2 8-9.3 2.7-3.1 3.5-5.3 5.3-8.8 1.8-3.5.9-6.6-.4-9.3-1.3-2.7-11.9-28.7-16.3-39.2-4.3-10.3-8.7-8.9-11.9-9.1-3.1-.2-6.6-.2-10.1-.2-3.5 0-9.3 1.3-14.1 6.6-4.9 5.3-18.7 18.3-18.7 44.6s19.1 51.8 21.8 55.4c2.7 3.5 37.6 57.5 91.1 80.6 12.7 5.5 22.6 8.7 30.4 11.2 12.8 4 24.4 3.4 33.6 2.1 10.3-1.5 31.6-12.9 36-25.4 4.5-12.5 4.5-23.2 3.1-25.4-1.3-2.3-4.8-3.5-10.1-6.3z"/>
        </svg>
      </a>
    </div>
  )
}
