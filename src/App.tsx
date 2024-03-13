import PostRequirement from './Pages/PostRequirement'
import HomePage from './Pages/HomePage'
import RequirementListingPage from './Pages/RequirementListingPage'
import AddListing from './Pages/AddListing'
import PostAdd from './Pages/PostAdd'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { Layout } from 'antd';

const { Footer } = Layout;

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/requirementsListing" element={<RequirementListingPage />} />
          <Route path="/addsListing" element={<AddListing />} />
          <Route path="/PostRequirement" element={<PostRequirement />} />
          <Route path="/PostAdd" element={<PostAdd />} />
        </Routes>
      </Router>
      <Footer style={{ textAlign: 'center' }}>Broker's Website ©2024 Created by You</Footer>
    </>
  )
}

export default App
