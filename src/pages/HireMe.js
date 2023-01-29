import React from 'react'
import { Link } from 'react-router-dom'

const HireMe = () => {
  return (
    <div className='main mt-5 text-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-center neon-color'>Hiring Developer</h1>
            <hr/>
            <p className='text-center fs-3'>
              Hire me as your developer and bring your next project idea into a reality.<br/>
              Bring your own app or website to your own personal device and share around the world with the
                <Link to='/'>"cloud management plan"
                <span className='link-info text-uppercase'>
                </span>.
                </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireMe