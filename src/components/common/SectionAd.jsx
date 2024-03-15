import React from 'react'

const SectionAd = ({backgroundImageUrl, desc}) => {
  return (
    <>
        <div className="section-ad" style={{backgroundImage:`url(${backgroundImageUrl})`}}>
            <h5>
                {desc}
            </h5>
        </div>
    </>
  )
}

export default SectionAd