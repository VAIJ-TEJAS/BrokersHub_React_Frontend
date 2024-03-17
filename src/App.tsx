import PostRequirement from './Pages/PostRequirement'
import HomePage from './Pages/HomePage'
import RequirementListingPage from './Pages/RequirementListingPage'
import AddListing from './Pages/AddListing'
import PostAdd from './Pages/PostAdd'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import ProfilePage from './Pages/ProfilePage'
import FooterComp from './components/Footer'

function App() {

  return (
    <div className='min-h-full flex flex-col justify-between'>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/requirementsListing/:postId" element={<RequirementListingPage />} />
          <Route path="/requirementsListing/" element={<RequirementListingPage />} />
          <Route path="/addsListing/:postId" element={<AddListing />} />
          <Route path="/addsListing" element={<AddListing />} />
          <Route path="/PostRequirement/:postId" element={<PostRequirement />} />
          <Route path="/PostRequirement" element={<PostRequirement />} />
          <Route path="/PostAdd/:postId" element={<PostAdd />} />
          <Route path="/PostAdd" element={<PostAdd />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <FooterComp />
      </Router>

    </div>
  )
}

export default App
