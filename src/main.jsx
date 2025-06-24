import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import * as bootstrap from 'bootstrap'; // ← Add this
window.bootstrap = bootstrap;           // ← Make it globally accessible
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import '../src/assets/css/header.css'
import '../src/assets/css/style.css'
import '../src/assets/js/custom.js'
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
