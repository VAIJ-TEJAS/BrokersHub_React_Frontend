import PostRequirement from './Pages/PostRequirement'
import HomePage from './Pages/HomePage'
import ListingPage from './Pages/ListingPage'
import PostAdd from './Pages/PostAdd'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Listing" element={<ListingPage />} />
          <Route path="/PostRequirement" element={<PostRequirement />} />
          <Route path="/PostAdd" element={<PostAdd />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
