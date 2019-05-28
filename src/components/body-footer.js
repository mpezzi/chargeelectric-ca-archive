import React from "react"
import "./body-footer.scss"

const BodyFooter = () => {

  return (
    <section id="contact" className="cta section">
      <div className="container">
        <div className="cta-inner section-inner">
          <form name="contact" method="POST" action="https://formspree.io/funkym@gmail.com">
            <div className="form-field">
              <h3 className="section-title mt-0">
                Want an enjoyable and high quality experience? Get in touch!
              </h3>
            </div>
            <div className="form-field">
              <div>
                <label>Name:</label>
              </div>
              <div>
                <input type="text" id="name" name="name" />
              </div>
            </div>
            <div className="form-field">
              <div>
                <label>Email:</label>
              </div>
              <div>
                <input type="email" id="email" name="email" />
              </div>
            </div>
            <div className="form-field">
              <div>
                <label>Message:</label>
              </div>
              <div>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
            </div>
            <div>
              <button class="button button-primary" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default BodyFooter
