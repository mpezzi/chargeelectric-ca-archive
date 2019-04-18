import React from "react"

const BodyContent = ({ children }) => {

  return (
    <section className="section">
      <div className="container">
        <div className="section-inner has-bottom-divider">
          {children}
        </div>
      </div>
    </section>
  );

}

export default BodyContent
