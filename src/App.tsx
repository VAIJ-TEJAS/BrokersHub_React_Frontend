import AddItem from './components/AddItem'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"home"} />} />
          <Route path="/AddItem" element={<AddItem />} />
          <Route path="/home" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
