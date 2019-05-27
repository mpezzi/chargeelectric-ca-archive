import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./body-footer.scss"

const BodyFooter = () => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            mail
          }
        }
      }
    `
  );

  return (
    <section id="contact" className="cta section">
      <div className="container">
        <div className="cta-inner section-inner">
          <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <p style={{display: 'none'}}>
              <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
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
                <input type="text" id="email" name="email" />
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
