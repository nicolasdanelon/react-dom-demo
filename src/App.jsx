import { Routes, Route } from 'react-router-dom'
import * as Screen from './components'
import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<Screen.Template />}>
      <Route index element={<Screen.Home />} />
      <Route path="who-we-are" element={<Screen.WhoWeAre />} />
      <Route path="who-we-are/:name" element={<Screen.WhoWeAre />} />
      <Route path="contact-us" element={<Screen.ContactUs />} />
      <Route path="services" element={<Screen.Services />} />
      <Route path="test" element={<Screen.Test />} />
      <Route path="*" element={<Screen.NotFound />} />
    </Route>
  </Routes>
)

export default App
