import AddItem from './Pages/AddItem'
import HomePage from './Pages/HomePage'
import ListingPage from './Pages/ListingPage'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/AddItem" element={<AddItem />} />
          <Route path="/Listing" element={<ListingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
