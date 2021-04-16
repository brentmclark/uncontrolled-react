# @uncontrolled/react

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@uncontrolled/react.svg)](https://www.npmjs.com/package/@uncontrolled/react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About Uncontrolled

Uncontrolled is a form component designed to complement use of HTML5 form fields and validation.  There is no state management, no form field/control libraries to mess with, and no validation.  

Why?

Because HTML has already done that for you and using the native HTML form fields (and validation) is incredibly simple.  Check out the example below if you're skeptical.  It's got state management and validaton baked in.

## Validation

See the MDN docs on HTML Form validation: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

## State Management

The DOM.

## WARNING

This package is in alpha and there are no guarantees that version changes will retain backwards compatability. Use and update at your own risk.

That said, the API itself is likely settled.  A render prop offers the most flexibility and greatest opportunity for backwards compatability.

## Install

using `yarn`

```bash
yarn add @uncontrolled/react
```

using `npm`

```bash
npm i @uncontrolled/react
```

## Usage

```jsx
import React from 'react'
import Form from '@uncontrolled/react'

function Example(props) {
  return (
    <Form
      onSubmit={({ fieldData }) => {
        console.log({ fieldData });
      }}
    >
      {({ formIsDirty }) => (
        <>
          <label>First Name</label>
          <input type="text" required min={2} name="firstName" />
          <button type="submit">Submit</button>
        </>
      )}
    </Form>
  );
}
```

## Working Example

Check out this [fully working example on Codesandbox](https://codesandbox.io/s/basic-contact-form-with-serialization-cq7fx?file=/src/index.js)

## License

MIT © [brentmclark](https://github.com/brentmclark)
