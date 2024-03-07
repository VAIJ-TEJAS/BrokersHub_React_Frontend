import React from 'react'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div>
        <div className='bg-[#bbddfd]'>
          <div className='container-lg py-5'>
            <h1 className='fs-1 fw-bold text-center my-3'>Heading</h1>
            <p className='col-md-7 text-center mx-auto' style={{fontFamily: 'poppins'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae earum iure minima consequuntur nemo quisquam beatae perspiciatis, sit at nihil possimus, assumenda officia? Quas esse dicta laborum animi temporibus unde, nisi magnam libero adipisci eum natus sint a sequi. In, maiores. Necessitatibus, quas quam sit ipsum aliquid consectetur, impedit veritatis voluptates beatae quibusdam veniam ipsam accusamus expedita facilis tenetur autem itaque reiciendis hic accusantium, voluptas quisquam rem tempore voluptatibus. Blanditiis, delectus facere. Eos, et sed? Nostrum deleniti cumque sunt vitae tempora. Perspiciatis doloribus neque reprehenderit corrupti modi, numquam itaque dicta eligendi, dolores amet suscipit cumque accusantium, est vel quod.
            </p>
          </div>
        </div>
        <div className='bg-light'>
          <div className='container-lg d-flex '>
            <div>
              <img src="https://via.placeholder.com/500x300" alt="" />
            </div>
            <div className='m-5 col-6'>
              <h2 className='fs-3 fw-bold'>Services</h2>
              <p className='my-3' style={{fontFamily: 'poppins'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores amet unde accusamus sint a eius illo tempora commodi, blanditiis quaerat doloribus natus rem enim provident obcaecati veritatis! Quia sed quibusdam neque aperiam rem nostrum quam corporis. Laborum, illo exercitationem impedit excepturi veritatis autem doloribus beatae est totam quasi sapiente nostrum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
