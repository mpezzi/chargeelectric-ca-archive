import React from "react"
import { Link } from "gatsby"
import "./service.scss"

const Service = ({ title, description, path, image }) => {

  return (
    <div className="service feature text-center is-revealing">
      <div className="feature-inner">
        <div className="image feature-icon">
          <Link to={path}>
            <img src={'/images/services/' + image} alt={title} />
          </Link>
        </div>
        <h4 className="feature-title mt-24">
          <Link to={path}>
            {title}
          </Link>
        </h4>
        <p className="text-sm mb-0">
          {description}
        </p>
        <p className="more">
          <Link to={path}>
            Learn more
          </Link>
        </p>
      </div>
    </div>
  )

}

export default Service
