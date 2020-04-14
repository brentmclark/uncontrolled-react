import React from 'react'

import Form from '@uncontrolled/react'
import './index.css'

const App = (props) => {
  function onSubmit({fieldData}) {
    const { firstName, lastName, email, phoneNumber } = fieldData;
    alert(
      `
        Hello ${firstName} ${lastName}!\r\n
        Since you signed up, we will email you at ${email} or call you at ${phoneNumber}.\r\n
        Thanks!
      `
    );
  }

  return (
  <Form onSubmit={onSubmit}>
    {
      ({formIsDirty}) => (
        <>
          <div className="field">
            <label>First Name</label>
            <input type="text" name="firstName" required />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input type="text" name="lastName" required />
          </div>
          <div className="field">
            <label>Email Address</label>
            <input type="email" name="email" required />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="tel" name="phoneNumber" required pattern="\d{10}" />
          </div>
          <div>
            <button type="submit">Sign Me Up!</button>
            {formIsDirty && (
              <span
                style={{ marginLeft: "15px", color: "red", fontWeight: 900 }}
              >
                The form is dirty
              </span>
            )}
          </div>
        </>
      )
    }
  </Form>
   )
}

export default App
