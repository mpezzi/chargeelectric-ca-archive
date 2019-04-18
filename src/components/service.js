import React from "react"
import image from "../images/feature-icon-01.svg"

const Service = ({ title, description }) => {

  return (
    <div className="feature text-center is-revealing">
      <div className="feature-inner">
        <div className="feature-icon">
           <img src={image} alt="Feature 01" />
        </div>
        <h4 className="feature-title mt-24">
          {title}
        </h4>
        <p className="text-sm mb-0">
          {description}
        </p>
      </div>
    </div>
  )

}

export default Service
