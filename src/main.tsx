import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import "swiper/css";
// import "swiper/css/effect-coverflow";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
