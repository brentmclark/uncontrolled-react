import React from 'react'
import useForm from '@uncontrolled/react'

function BasicForm(props) {
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

export {BasicForm as default}