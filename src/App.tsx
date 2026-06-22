import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicesOverview from './pages/services/ServicesOverview'
import HouseRenovations from './pages/services/HouseRenovations'
import WoodFlooring from './pages/services/WoodFlooring'
import FittedWardrobes from './pages/services/FittedWardrobes'
import KitchenInstallations from './pages/services/KitchenInstallations'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'
import AreasWeCover from './pages/AreasWeCover'
import BlogIndex from './pages/blog/BlogIndex'
import CarpenterPortishead from './pages/blog/CarpenterPortishead'
import FittedWardrobesPortishead from './pages/blog/FittedWardrobesPortishead'
import HouseRenovationsPortishead from './pages/blog/HouseRenovationsPortishead'
import KitchenInstallationPortishead from './pages/blog/KitchenInstallationPortishead'
import WoodFlooringPortishead from './pages/blog/WoodFlooringPortishead'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesOverview />} />
          <Route path="services/house-renovations" element={<HouseRenovations />} />
          <Route path="services/wood-flooring-installations" element={<WoodFlooring />} />
          <Route path="services/fitted-wardrobes" element={<FittedWardrobes />} />
          <Route path="services/kitchen-installations" element={<KitchenInstallations />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="areas-we-cover" element={<AreasWeCover />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/carpenter-in-portishead" element={<CarpenterPortishead />} />
          <Route path="blog/fitted-wardrobes-in-portishead" element={<FittedWardrobesPortishead />} />
          <Route path="blog/house-renovations-in-portishead" element={<HouseRenovationsPortishead />} />
          <Route path="blog/kitchen-installation-in-portishead" element={<KitchenInstallationPortishead />} />
          <Route path="blog/wood-flooring-installation-in-portishead" element={<WoodFlooringPortishead />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
