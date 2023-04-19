import React from 'react'
import bannerImage from '../../banner.svg'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div>
      <img className='banner-image' src={bannerImage} />
      <div className="banner-text">
        <h2>Latest Styles</h2>
        <h5>At Yesterday's Price</h5>
        <button className="btn btn-danger">
          <h5 className='btn-text'>Browse all styles</h5>
        </button>
      </div>
    </div>
  )
}

export default HeroBanner