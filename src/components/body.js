import React from "react"
import BodyHeader from "./body-header";
import BodyContent from "./body-content";
import BodyFooter from "./body-footer";

const Body = ({ children }) => {

  return (
    <main>
      <BodyHeader />
      <BodyContent>
        {children}
      </BodyContent>
      <BodyFooter />
    </main>
  )

}

export default Body
