# @unmanaged/react

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@unmanaged/react.svg)](https://www.npmjs.com/package/@unmanaged/react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About Unmanaged

Unmanaged is a form component designed to complement use of HTML5 form fields and validation.  There is no state management, no form field/control libraries to mess with, and no validation.  

Why?

Because HTML has already done that for you and using the native HTML form fields (and validation) is incredibly simple.  Check out the example below if you're skeptical.  It's got state management and validaton baked in.

## WARNING

This package is in alpha and there are no guarantees that version changes will retain backwards compatability. Use and update at your own risk.

## Install

```bash
yarn add @unmanaged/react
```

## Usage

```jsx
import React from 'react'

import Form from '@unmanaged/react'

function Example(props) {
    return (
      <Form onSubmit={(event, fieldData) => {
        console.log({fieldData})
      }}>
        <label>First Name</label>
        <input type="text" required min={2}/>
        <button type="submit">Submit</button>
      </Form>
    )
}
```

## License

MIT © [brentmclark](https://github.com/brentmclark)
