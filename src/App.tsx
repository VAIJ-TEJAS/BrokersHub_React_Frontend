import { useState } from 'react' 
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { Modal } from 'antd'

import PostAdd from './Pages/PostAdd'
import HomePage from './Pages/HomePage'
import AddListing from './Pages/AddListing'
import ProfilePage from './Pages/ProfilePage'
import PostRequirement from './Pages/PostRequirement'
import RequirementListingPage from './Pages/RequirementListingPage'

import Navbar from './components/Navbar'
import FooterComp from './components/Footer'
import Autentication from './components/Authentication'
import { Context } from './context/context.provider'

function App() {

  const { authModalOpen, showAuthModal, handleAuthCancel } = Context();

  return (
    <div className='min-h-full flex flex-col justify-between'>
      <Router>
        <Modal
          open={authModalOpen}
          onCancel={handleAuthCancel}
          footer={null}
        >
          <Autentication handleCancel={handleAuthCancel} />
        </Modal>
        <Navbar showModal={showAuthModal} />
        <Routes>
          <Route path="/" element={<Navigate to={"home"} />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/requirementsListing/:postId" element={<RequirementListingPage />} />
          <Route path="/requirementsListing/" element={<RequirementListingPage />} />
          <Route path="/addsListing/:postId" element={<AddListing/>} />
          <Route path="/addsListing" element={<AddListing/>} />
          <Route path="/PostRequirement/:postId" element={<PostRequirement showModal={showAuthModal} />} />
          <Route path="/PostRequirement" element={<PostRequirement showModal={showAuthModal} />} />
          <Route path="/PostAdd/:postId" element={<PostAdd showModal={showAuthModal} />} />
          <Route path="/PostAdd" element={<PostAdd showModal={showAuthModal} />} />
          <Route path="/profile" element={<ProfilePage showModal={showAuthModal} />} />
        </Routes>
        <FooterComp />
      </Router>

    </div>
  )
}

export default App
