import PostRequirement from './Pages/PostRequirement'
import HomePage from './Pages/HomePage'
import RequirementListingPage from './Pages/RequirementListingPage'
import Autentication from './components/Authentication'
import AddListing from './Pages/AddListing'
import PostAdd from './Pages/PostAdd'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import ProfilePage from './Pages/ProfilePage'
import FooterComp from './components/Footer'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Modal } from 'antd'

function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false)
  };

  return (
    <div className='min-h-full flex flex-col justify-between'>
      <Router>
        <Modal
          open={modalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Autentication handleCancel={handleCancel} />
        </Modal>
        <Navbar showModal={showModal} />
        <Routes>
          <Route path="/" element={<Navigate to={"home"} />} />
          <Route path="/home" element={<HomePage showModal={showModal} />} />
          <Route path="/requirementsListing/:postId" element={<RequirementListingPage showModal={showModal} />} />
          <Route path="/requirementsListing/" element={<RequirementListingPage showModal={showModal} />} />
          <Route path="/addsListing/:postId" element={<AddListing showModal={showModal} />} />
          <Route path="/addsListing" element={<AddListing showModal={showModal} />} />
          <Route path="/PostRequirement/:postId" element={<PostRequirement showModal={showModal} />} />
          <Route path="/PostRequirement" element={<PostRequirement showModal={showModal} />} />
          <Route path="/PostAdd/:postId" element={<PostAdd showModal={showModal} />} />
          <Route path="/PostAdd" element={<PostAdd showModal={showModal} />} />
          <Route path="/profile" element={<ProfilePage showModal={showModal} />} />
        </Routes>
        <FooterComp />
      </Router>

    </div>
  )
}

export default App
