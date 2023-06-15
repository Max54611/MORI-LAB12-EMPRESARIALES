import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {PrestamosPage} from './pages/PrestamosPage'
import {PrestamosFormPage} from './pages/PrestamosFormPage'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/prestamos/"/>}/>
        <Route path="/prestamos/" element={<PrestamosPage/>}/>
        <Route path="/prestamos-create" element={<PrestamosFormPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App