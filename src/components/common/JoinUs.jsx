import React from 'react'

const JoinUs = () => {
  return (
    <>
    <div className="container">
    <div className="section-join-us">
        <div className="content">
            <h4>join our community</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quae ullam.</p>
        </div>
        <form className="subscribe">
            <input name='email' type='text' placeholder='Enter your email...' className="email-input" />
            <button className="btn-subscribe" onClick={(e)=>e.target}>Subscribe</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default JoinUs