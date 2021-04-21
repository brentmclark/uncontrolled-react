import React from "react";
import useForm from "@uncontrolled/react";
import "./index.css";

const App = props => {
  return (
    <section>
      <FormA />
      <FormB />
    </section>
  )
};

function FormBody(props) {
  const [firstName, setFirstName] = React.useState('')
  console.log({firstName})
  return (
    <>
      <div className="field">
          <label>First Name</label>
          <input type="text" name="firstName" required onChange={e => setFirstName(e.target.value)} />
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
        </div>
    </>
  )
}

function FormA(props) {
  const {Form, isDirty} = useForm({validationErrorClass: 'bleh', parentErrorClass: 'bleh', inputElementSelector: ''})
  const [message, setMessage] = React.useState('')

  function onSubmit({ fieldData }) {
    const { firstName, lastName, email, phoneNumber } = fieldData;
    setMessage(
      `
        Hello ${firstName} ${lastName}!\r\n
        Since you signed up, we will email you at ${email} or call you at ${phoneNumber}.\r\n
        Thanks!
      `
    );
  }

  return (
    <>
      {React.useMemo(() => (
        <Form onSubmit={onSubmit}>
          <FormBody />
        </Form>
      ), [])}
      <div
        style={{
          padding: '20px',
          border: '1px solid red',
          color: 'red', 
          fontWeight: '700',
          margin: '20px',
        }}>
            {isDirty && 'Dirty Form!!!'}
        </div>
      <div
        style={{
          padding: '20px',
          border: '1px solid blue',
          color: 'blue', 
          fontWeight: '700',
          margin: '20px',
        }}>
          {message}
        </div>
    </>
  );
}

function FormB(props) {
  const {Form} = useForm()
  return React.useMemo(() => (
    <Form
      onSubmit={({ fieldData }) => {
        console.log({ fieldData });
      }}
    >
      <label>First Name</label>
      <input type="text" required min={2} name="firstName" />
      <button type="submit">Submit</button>
    </Form>
  ), []);
}

export default App;
